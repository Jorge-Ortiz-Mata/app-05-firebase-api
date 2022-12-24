import axios from "axios";
import { FIREBASE_URL } from "@env"

export function storeItems(itemData) {
  axios.post(`${FIREBASE_URL}/items.json`, itemData);
}
