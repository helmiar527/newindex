// Import environment variables
import { generateAuthHash } from "./authUtils";
import ApiConfig from "../../config/ApiConfig";
import useErrorStore from "../../services/err/errorStore";

const { API_ENDPOINTS } = ApiConfig;
const { CLIENT_USERNAME } = ApiConfig;

class TokenService {
  async requestToken() {
    try {
      // Generate data autentikasi
      const { timestamp, hash } = await generateAuthHash();

      // Siapkan form data
      const formData = new FormData();
      formData.append("timestamp", timestamp);
      formData.append("key", hash);
      formData.append("username", CLIENT_USERNAME);

      // Lakukan request ke endpoint
      const response = await fetch(API_ENDPOINTS.AUTH, {
        method: "POST",
        body: formData,
      });

      // Parse response dan ekstrak dari backend
      const datas = await response.json();
      if (!response.ok) {
        switch (response.status) {
          case 400:
            useErrorStore
              .getState()
              .addError("token_service", datas["message"]);
            break;
          case 404:
            useErrorStore
              .getState()
              .addError("token_service", datas["message"]);
            break;
          case 401:
            useErrorStore
              .getState()
              .addError("token_service", datas["message"]);
            break;
          case 503:
            useErrorStore
              .getState()
              .addError("token_service", datas["message"]);
            break;
        }
      }

      const data = datas[1];

      if (!data.token) {
        useErrorStore
          .getState()
          .addError("token_service", "Token not found in response");
      }

      return data.token;
    } catch (error) {
      useErrorStore
        .getState()
        .addError("token_service", "Gagal meminta token dari server");
    }
  }

  /**
   * Static method untuk mendapatkan instance singleton
   * @returns {TokenService}
   */
  static getInstance() {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }
}

// Inisialisasi instance singleton
TokenService.instance = null;

export default TokenService;
