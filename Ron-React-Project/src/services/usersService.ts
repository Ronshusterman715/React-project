import axios from "axios";
import { User } from "../interfaces/users/user";

const API: string = import.meta.env.VITE_USERS_API;

//create user
export async function createUser(user: User) {
  return await axios.post(API, user);
}
