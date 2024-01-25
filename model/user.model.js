"use server";
import connectDB from "./db";
import User from "./user.Sechema";
export async function createUser(_, data) {
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  console.log(name);
  await connectDB();
  const isEmailExist = await User.findOne({ email: email });

  if (isEmailExist) {
    return {
      error: true,
      message: "Email already exists",
    };
  }
  const user = new User({ email, password, name });
  await user.save();
  return {
    success: true,
  };
}
export async function checkUser(_, data) {
  console.log(data);
  const email = data.get("email");
  const password = data.get("password");
  await connectDB();
  const isUserExist = await User.findOne({ email: email });
  if (!isUserExist) {
    return {
      error: true,
      message: "User does not exist",
    };
  }
  const isCorrectPassword = await User.findOne({
    email: email,
    password: password,
  });
  if (!isCorrectPassword) {
    return { error: true, message: "Password is incorrect" };
  }
  return {
    success: true,
    data: {
      email: email,
      password: password,
    },
  };
}
