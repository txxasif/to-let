import axios from "axios";
export const url = process.env.Backend_Url;
export const axiosAdmin = axios.create({
  baseURL: url,
});
export async function createPropertyAxios(data) {
  const response = await axiosAdmin.post("/property/create", data);
  return response.data;
}
export async function getPropertiesByUserId(userId) {
  console.log("hi");
  const response = await fetch(`/api/property/user?id=${userId}`).then(
    (response) => response.json()
  );
  return response.data;
}
// export async function getFilteredProperty(data) {
//   const { distance, type, lat, lng } = data;
//   console.log(lat, lng);
//   const response = await axiosAdmin.get(
//     `/property/filter?distance=${distance}&type=${type}&lat=${lat}&lng=${lng}`
//   );
//   return response.data;
// }

export async function createPropertyAxiosMock(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify content type (adjust if needed)
    },
    body: JSON.stringify(data), // Convert data to JSON string for POST request
  };
  console.log(options);
  const response = await fetch("/api/property/", options);
  return response.data;
}
