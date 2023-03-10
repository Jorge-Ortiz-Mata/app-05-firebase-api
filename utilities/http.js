import axios from "axios";
import { FIREBASE_URL } from "@env"

export function storeItem(itemData) {
  axios.post(`${FIREBASE_URL}/items.json`, itemData);
}

export function updateItem(id, itemData){
  axios.put(`${FIREBASE_URL}/items/${id}.json`, itemData);
}

export function deleteItem(id){
  axios.delete(`${FIREBASE_URL}/items/${id}.json`);
}

export async function getItems(){
  const items = []
  const response = await axios.get(`${FIREBASE_URL}/items.json`);

  for (const key in response.data){
    const itemObj = {
      id: key,
      title: response.data[key].title,
      description: response.data[key].description,
      price: response.data[key].price
    }

    items.push(itemObj);
  }

  return items;
}
