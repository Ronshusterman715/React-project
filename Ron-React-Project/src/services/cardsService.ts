import { Card } from "../interfaces/cards/Card";
import axiosInstance from "../utils/interceptors/axios-interceptor";

export async function createCard(card: Card) {
  return await axiosInstance.post("/cards", card);
}

//get all cards
export async function getAllCards() {
  return await axiosInstance.get("/cards");
}

//get card by id
export async function getCardById(id: string) {
  return await axiosInstance.get(`/cards/${id}`);
}

//update card
export async function updateCard(id: string, card: Card) {
  return await axiosInstance.put(`/cards/${id}`, card);
}

//delete card
export async function deleteCard(id: string) {
  return await axiosInstance.delete(`/cards/${id}`);
}
