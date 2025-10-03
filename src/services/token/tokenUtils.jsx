// Import environment variables
import useErrorStore from "../../services/err/errorStore";

// Fungsi untuk menghasilkan HMAC-SHA256
export async function generateHmacSha256(timestamp, apikey) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(apikey);
  const messageData = encoder.encode(timestamp);

  try {
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", key, messageData);

    const hashArray = Array.from(new Uint8Array(signature));
    const hexHash = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hexHash;
  } catch (error) {
    // Kirim error ke state error management
    useErrorStore
      .getState()
      .addError("hmac_service", "Failed to generate HMAC");
  }
}

// Fungsi untuk menghasilkan timestamp
export function generateTimestamp() {
  return Date.now().toString();
}
