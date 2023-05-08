import DetailLayout from "@/components/Layout/DetailLayout";
import { useRouter } from "next/router";
import React, { ReactElement, useLayoutEffect } from "react";
import MapPicker from "@/components/Address/MapPicker";

const Address = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    // request permission to use location on iOS
    navigator.permissions
      .query({ name: "geolocation" })
      .catch(() => {
        alert("Please allow location access to use this feature.");
        router.back();
      })
      .then((res: any) => {
        if (res.state === "denied") {
          alert("Permission to access location was denied");
          router.back();
        }
      });
  }, []);

  return (
    <div>
      <MapPicker />
    </div>
  );
};

Address.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Alamat">{page}</DetailLayout>;
};

export default Address;