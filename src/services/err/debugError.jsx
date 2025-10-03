import useErrorStore from "./errorStore";

// Fungsi untuk menampilkan semua error ke console
export const debugErrorLogger = () => {
  const errors = useErrorStore.getState().errors;

  if (errors.length === 0) {
    console.log(
      "%c[ERROR DEBUG] No errors in store",
      "color: #888; font-style: italic;"
    );
    return;
  }

  console.groupCollapsed(
    "%c[ERROR DEBUG] Current errors in store",
    "color: #e11d48; font-weight: bold;"
  );

  errors.forEach((error) => {
    console.log(
      `%c${error.errorFrom}%c: ${error.messageError}`,
      "color: #f43f5e; font-weight: bold;",
      "color: inherit;"
    );
    console.log(
      `%c  Timestamp: ${new Date(error.timestamp).toLocaleString()}`,
      "color: #888; font-size: 0.9em;"
    );
    console.log(`%c  ID: ${error.id}`, "color: #888; font-size: 0.9em;");
  });

  console.groupEnd();
};

// Hook untuk memantau perubahan error state dan log ke console
export const useDebugError = (enable = true) => {
  if (!enable) return;

  // Subscribe ke perubahan store
  const unsubscribe = useErrorStore.subscribe(
    (state) => state.errors,
    (errors, prevErrors) => {
      if (errors.length !== prevErrors.length) {
        console.log(
          "%c[ERROR DEBUG] Error store changed",
          "color: #3b82f6; font-weight: bold;"
        );
        debugErrorLogger();
      }
    }
  );

  // Log state awal
  console.log(
    "%c[ERROR DEBUG] Initializing error debug",
    "color: #3b82f6; font-weight: bold;"
  );
  debugErrorLogger();

  return unsubscribe;
};

// Fungsi untuk menampilkan ringkasan error
export const debugErrorSummary = () => {
  const errors = useErrorStore.getState().errors;

  const errorCountByService = errors.reduce((acc, error) => {
    acc[error.errorFrom] = (acc[error.errorFrom] || 0) + 1;
    return acc;
  }, {});

  console.groupCollapsed(
    "%c[ERROR DEBUG] Error Summary",
    "color: #e11d48; font-weight: bold;"
  );
  console.table(errorCountByService);
  console.groupEnd();
};

// Fungsi untuk menampilkan error count secara periodik (opsional)
export const startPeriodicErrorLogging = (interval = 30000) => {
  console.log(
    "%c[ERROR DEBUG] Starting periodic error logging",
    "color: #3b82f6; font-weight: bold;"
  );

  return setInterval(() => {
    const errors = useErrorStore.getState().errors;
    console.log(
      `%c[ERROR DEBUG] Current error count: ${errors.length}`,
      "color: #3b82f6; font-weight: bold;"
    );

    if (errors.length > 0) {
      // debugErrorSummary();
      debugErrorLogger();
    }
  }, interval);
};
