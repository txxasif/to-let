import axios from "axios";
const url = process.env.Backend_Url;
const axiosAdmin = axios.create({
  baseURL: url,
});
export async function createPropertyAxios(data) {
  const response = await axiosAdmin.post("/property/create", data);
  return response.data;
}
export async function getPropertiesByUserId(userId) {
  const response = await axiosAdmin.get(
    `/property/user/properties?id=${userId}`
  );
  return response.data;
}
