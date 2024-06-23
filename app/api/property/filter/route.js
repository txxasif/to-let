import getDistanceFromLatAddLng from "@/helper/distanceInKm";
import connectDB from "@/model/db";
import Property from "@/model/property.schema";
import { NextResponse } from "next/server";
export async function GET(req) {
  const params = req.nextUrl.searchParams;
  await connectDB();
  const distance = params.get("distance");
  const type = params.get("type");
  const lat = Number(params.get("lat"));
  const lng = Number(params.get("lng"));

  let result = [];
  if (type === "family") {
    result = await Property.find({
      $or: [
        {
          type: "family",
        },
        {
          type: "both",
        },
      ],
    }).lean();
  } else {
    result = await Property.find({
      $or: [
        {
          type: "bachelor",
        },
        {
          type: "both",
        },
      ],
    }).lean();
  }
  const filteredData = result.filter(
    (data) =>
      getDistanceFromLatAddLng(lat, lng, data.lat, data.lng) < Number(distance)
  );

  return NextResponse.json({ data: filteredData });
}
