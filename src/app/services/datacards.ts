import { fetchAPI } from "../lib/apiClient";
import { Card } from "../types/api";

// Fungsi untuk mengambil data cards
export async function getDataCards() {
  return fetchAPI<Array<Card>>("/datacards");
}

