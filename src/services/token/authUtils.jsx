// Import environment variables
import { generateHmacSha256, generateTimestamp } from "./tokenUtils";
import ApiConfig from "../../config/ApiConfig";
import useErrorStore from "../../services/err/errorStore";

const { API_KEY } = ApiConfig;

export async function generateAuthHash() {
  try {
    // Generate timestamp
    const timestamp = generateTimestamp();

    // Generate hash menggunakan HMAC-SHA256
    const hash = await generateHmacSha256(timestamp, API_KEY);
    return {
      timestamp,
      hash,
    };
  } catch (error) {
    useErrorStore
      .getState()
      .addError("auth_service", "Failed to generate authentication hash");
  }
}
