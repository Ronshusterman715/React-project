import { Auth } from "../interfaces/Auth/Auth";
import axiosInstance from "../utils/interceptors/axios-interceptor";

//make login
export async function login(auth: Auth) {
  return await axiosInstance.post("users/login", auth);
}
