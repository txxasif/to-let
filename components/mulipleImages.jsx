"use client";
import React, { useState, useEffect } from "react";
import { Label, NumberInput, SelectOption, TextInput } from "./field";
import { Input } from "./ui/input";
import { useSelector } from "react-redux";
import { currentLocationSelector } from "@/store/userCurrentLocation/userCurrentLocationSelector";
import useMutationHook from "@/hooks/useMutationHook";
import { SpinnerButton } from "./ui/spinnerButton";
import { useSession } from "next-auth/react";
import { uploadImages } from "@/helper/image-upload";
import toast from "react-hot-toast";
import { createPropertyAxios } from "@/actions/temp";
const initialState = {
  address: "",
  rooms: 0,
  floorNo: 0,
  bathroom: 0,
  veranda: 0,
  photos: [],
  contactNumber: "",
  rent: 0,
  type: "both",
  serviceCharge: 0,
  lat: 0,
  lng: 0,
};
const options = [
  { value: "bachelor", name: "Bachelor" },
  { value: "family", name: "Family" },
  { value: "both", name: "Both" },
];
const MultipleImageSelector = ({}) => {
  const currentLocation = useSelector(currentLocationSelector);
  const { data: session, status } = useSession();
  console.log(session);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const { mutate, isPending } = useMutationHook(createPropertyAxios, {
    key: ["posts"],
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      lat: currentLocation.lat,
      lng: currentLocation.lng,
    }));
  }, [currentLocation]);
  function handleChange(e) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }
  async function handleSubmit() {
    console.log(currentLocation);
    if (!images.length) toast.error("Please Choose Images");
    const urls = await uploadImages(images);
    const data = formData;
    data.photos = urls;
    data["userId"] = session.user._id;

    mutate(formData);
  }
  function onImageChange(e) {
    const { type, files } = e.target;
    setImages((prev) => [...prev, files[0]]);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">
        <div className="space-y-2">
          <Label name="address" />
          <TextInput name="address" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="rooms" />
          <NumberInput name="rooms" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="floorNo" />
          <NumberInput name="floorNo" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="bathroom" />
          <NumberInput name="bathroom" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="veranda" />
          <NumberInput name="veranda" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="contactNumber" />
          <NumberInput name="contactNumber" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="rent" />
          <NumberInput name="rent" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="serviceCharge" />
          <NumberInput name="serviceCharge" onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label name="Type" />
          <SelectOption
            values={options}
            defaultValue={formData.type}
            onChange={handleChange}
            name="type"
          />
        </div>
        <div className="space-y-2">
          <Label name="image" />
          <Input
            type="file"
            name="image"
            accept="image/*"
            onChange={onImageChange}
          />
        </div>
        <div className="space-y-2">
          <Label name="lat" />
          <NumberInput
            name="lat"
            disabled={true}
            placeHolder={currentLocation.lat}
          />
        </div>
        <div className="space-y-2">
          <Label name="lng" />
          <NumberInput
            name="lng"
            disabled={true}
            placeHolder={currentLocation.lng}
          />
        </div>
      </div>

      <div className="flex justify-center w-full px-2 py-2">
        <SpinnerButton
          onClick={handleSubmit}
          name={"Add"}
          isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default MultipleImageSelector;
