import { Card } from "../interfaces/cards/Card";
import axiosInstance from "../utils/interceptors/axios-interceptor";


export async function createCard(card: Card) {
  return await axiosInstance.post("/cards", card);
}

//get all cards
export async function getAllCards() {
  return await axiosInstance.get("/cards");
}
