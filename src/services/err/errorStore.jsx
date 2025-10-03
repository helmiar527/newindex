// import environment variables
import { create } from 'zustand';

const useErrorStore = create((set, get) => ({
  errors: [],
  
  // Menambahkan error baru
  addError: (errorFrom, messageError) => {
    const newError = {
      id: Date.now(),
      errorFrom,
      messageError,
      timestamp: new Date().toISOString()
    };
    
    set(state => ({
      errors: [...state.errors, newError]
    }));
    
    // Auto-remove error setelah 10 detik (opsional)
    setTimeout(() => {
      get().removeError(newError.id);
    }, 10000);
  },
  
  // Menghapus error berdasarkan ID
  removeError: (id) => {
    set(state => ({
      errors: state.errors.filter(error => error.id !== id)
    }));
  },
  
  // Menghapus semua error
  clearErrors: () => {
    set({ errors: [] });
  },
  
  // Mendapatkan error dari service tertentu
  getErrorsByService: (serviceName) => {
    return get().errors.filter(error => error.errorFrom === serviceName);
  }
}));

export default useErrorStore;