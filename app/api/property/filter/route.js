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
  await Property.insertMany([
    {
      "userId": "65b209904d37098aa2774ef3",
      "homeName": "Asif's Home",
      "address": "Rajsahi College",
      "rooms": 3,
      "floorNo": 3,
      "bathroom": 3,
      "veranda": 3,
      "photos": [
        "https://res.cloudinary.com/dupffxzyk/image/upload/v1718026269/agrobd/living-room-1835923_640_z5ibmy.jpg"
      ],
      "contactNumber": "1679806197",
      "rent": 12000,
      "type": "both",
      "serviceCharge": 1500,
      "lat": 24.3804546,
      "lng": 88.5843005,
      "__v": 0
    },
    {
      "userId": "65b209904d37098aa2774ef3",
      "homeName": "Asif's Home",
      "address": "Rajsahi College",
      "rooms": 3,
      "floorNo": 3,
      "bathroom": 3,
      "veranda": 3,
      "photos": [
        "https://res.cloudinary.com/dupffxzyk/image/upload/v1718026269/agrobd/living-room-1835923_640_z5ibmy.jpg"
      ],
      "contactNumber": "1679806197",
      "rent": 12000,
      "type": "bachelor",
      "serviceCharge": 1500,
      "lat": 24.3901234,
      "lng": 88.5709876,
      "__v": 0
    },
    {
      "userId": "65b209904d37098aa2774ef3",
      "homeName": "Asif's Home",
      "address": "Rajsahi College",
      "rooms": 3,
      "floorNo": 3,
      "bathroom": 3,
      "veranda": 3,
      "photos": [
        "https://res.cloudinary.com/dupffxzyk/image/upload/v1718026269/agrobd/living-room-1835923_640_z5ibmy.jpg"
      ],
      "contactNumber": "1679806197",
      "rent": 12000,
      "type": "family",
      "serviceCharge": 1500,
      "lat": 24.3702468,
      "lng": 88.5901234,
      "__v": 0
    }
  ]
  )
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
  console.log(filteredData);
  return NextResponse.json({ data: filteredData });
}
