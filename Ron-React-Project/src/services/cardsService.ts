import axios from "axios";

const API: string = import.meta.env.VITE_CARDS_API;

//get all cards
export function getAllCards() {
  return axios.get(API);
}
