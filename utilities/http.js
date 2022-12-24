import axios from "axios";
import { FIREBASE_URL } from "@env"

export function storeItem(itemData) {
  axios.post(`${FIREBASE_URL}/items.json`, itemData);
}

export async function getItems(){
  const response = await axios.get(`${FIREBASE_URL}/items.json`);
  return response.data;
}
