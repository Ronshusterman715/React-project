import { User } from "../interfaces/users/user";
import axiosInstance from "../utils/interceptors/axios-interceptor";

//create user
export async function createUser(user: User) {
  return await axiosInstance.post("/users", user);
}
