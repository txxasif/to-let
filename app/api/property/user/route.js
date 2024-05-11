import connectDB from "@/model/db";
import Property from "@/model/property.schema";
import { NextResponse } from "next/server";
export async function GET(req) {
  const params = req.nextUrl.searchParams;
  await connectDB();
  console.log("hi");
  const id = params.get("id");
  console.log(id);
  const properties = await Property.find({ userId: id }).lean();
  console.log(properties);
  return NextResponse.json({ data: properties });
}
