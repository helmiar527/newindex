// Import environment variables
import { create } from "zustand";
import { persist } from "zustand/middleware";
import TokenService from "./tokenService";

const tokenService = TokenService.getInstance();

// Waktu kadaluarsa token: 5 menit (dalam milidetik)
// const TOKEN_EXPIRY_TIME = 5 * 60 * 1000;
const TOKEN_EXPIRY_TIME = 1;

const useTokenStore = create(
  persist(
    (set, get) => ({
      // State
      token: null,
      isLoading: false,
      error: null,
      lastFetched: null,

      // Actions
      /**
       * Meminta token baru dari server
       */
      requestToken: async () => {
        set({ isLoading: true, error: null });

        try {
          const token = await tokenService.requestToken();
          set({
            token,
            isLoading: false,
            error: null,
            lastFetched: Date.now(),
          });
          return token;
        } catch (error) {
          set({
            error: error.message,
            isLoading: false,
          });
          throw error;
        }
      },

      /**
       * Menginisialisasi token (dipanggil saat aplikasi mulai)
       */
      initializeToken: async () => {
        // Jika token sudah ada dan masih valid (belum 5 menit), tidak perlu request baru
        const { token, lastFetched } = get();

        if (
          token &&
          lastFetched &&
          Date.now() - lastFetched < TOKEN_EXPIRY_TIME
        ) {
          return token;
        }

        // Jika token tidak ada atau sudah kadaluarsa, request token baru
        return await get().requestToken();
      },

      /**
       * Menggunakan token yang tersimpan
       * @returns {string|null} Token atau null jika tidak ada
       */
      UseToken: () => {
        const { token } = get();
        return token;
      },

      /**
       * Menghapus token dari state (logout)
       */
      clearToken: () => {
        set({
          token: null,
          error: null,
          lastFetched: null,
        });
      },

      /**
       * Memeriksa apakah token tersedia dan valid (belum 5 menit)
       */
      isValid: () => {
        const { token, lastFetched } = get();
        return (
          token && lastFetched && Date.now() - lastFetched < TOKEN_EXPIRY_TIME
        );
      },
    }),
    {
      name: "token-storage", // Nama untuk penyimpanan persistensi
      partialize: (state) => ({
        token: state.token,
        lastFetched: state.lastFetched,
      }), // Hanya menyimpan token dan lastFetched
    }
  )
);

export default useTokenStore;
