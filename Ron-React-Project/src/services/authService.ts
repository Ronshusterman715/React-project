import axios from "axios";
import { Auth } from "../interfaces/Auth/Auth";

const API: string = import.meta.env.VITE_USERS_API;

//make login
export async function login(auth: Auth) {
  return await axios.post(`${API}/login`, auth);
}
