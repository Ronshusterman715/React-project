import { User } from "../interfaces/users/User";
import axiosInstance from "../utils/interceptors/axios-interceptor";

//create user
export async function createUser(user: User) {
  return await axiosInstance.post("/users", user);
}

//edit user
export async function editUser(id: string, user: User) {
  return await axiosInstance.put(`/users/${id}`, user);
}

//get user by id
export async function getUserById(id: string) {
  return await axiosInstance.get(`/users/${id}`);
}
