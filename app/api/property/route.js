import connectDB from "@/model/db";
import Property from "@/model/property.schema";
import { NextResponse } from "next/server";
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const properties = new Property(body);
  await properties.save();
  return NextResponse.json({ message: "Done! " }, { status: 200 });
}
export async function GET(req) {
  const params = req.nextUrl.searchParams;
  await connectDB();
  const id = params.get("distance");
  console.log(id);
  return NextResponse.json({ message: "done" });
}
