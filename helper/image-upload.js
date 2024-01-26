export async function uploadPhoto(photo) {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", "agrobd");
  let result = await axios.post(
    "https://api.cloudinary.com/v1_1/dupffxzyk/image/upload",
    formData
  );
  console.log(result, "p");
  return result.data.secure_url;
}
