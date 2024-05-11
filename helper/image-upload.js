import axios from "axios";
export async function uploadPhoto(photo) {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", "agrobd");
  let result = await axios.post(
    "https://api.cloudinary.com/v1_1/dupffxzyk/image/upload",
    formData
  );
  return result.data.secure_url;
}

export async function uploadImages(images) {
  const uploadPromises = images.map(uploadPhoto);
  const urls = await Promise.all(uploadPromises);
  return urls;
}
