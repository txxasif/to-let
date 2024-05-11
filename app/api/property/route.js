import connectDB from "@/model/db";
import { postProperty } from "@/model/property.model";
import { NextResponse } from "next/server";
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const response = await postProperty(body);
  return NextResponse.json({ message: "Email Exists! " }, { status: 200 });
}
export async function GET(req) {
  const params = req.nextUrl.searchParams;
  console.log("hit");
  await connectDB();
  const id = params.get("id");
  console.log(id);
  return NextResponse.json({ message: "done" });
}
