/* eslint-disable @next/next/no-img-element */
import Seller, { SellerProps } from "@/components/Home/Seller";
import HomeLayout from "@/components/Layout/HomeLayout";
import Loading from "@/components/Seller/Loading";
import { useMapStore } from "@/store/map-store";
import { RADIUS } from "@/utils/constant";
import http from "@/utils/http";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useQuery } from "react-query";

const Home = () => {
  const location = useMapStore((state) => state.location);

  const router = useRouter();
  useEffect(() => {
    if (location.lat !== 0 && location.long !== 0) return;
    router.push("/app/profile/address");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.lat, location.long]);

  const { data, isLoading } = useQuery(
    ["sellers", location.lat, location.long],
    async () => {
      if (location.lat === 0 && location.long === 0) return;
      const req = await http.get(
        `outlet?lat=${location.lat}&lng=${location.long}&radius=${RADIUS}`
      );
      return req.data.result;
    }
  );

  useEffect(() => {
    const getPermission = async () => {
      if (navigator.geolocation) {
        // check permission
        try {
          await requestPermission();
          const req = await navigator.permissions.query({
            name: "geolocation",
          });
          if (req.state != "granted") {
            await requestPermission();
          }
        } catch (error: any) {
          throw new Error(error);
        }
      }
    };
    getPermission();
  }, []);

  const requestPermission = async () => {
    await navigator.permissions.query({
      name: "geolocation",
    });
  };

  return (
    <div>
      {isLoading && <Loading />}
      {data?.map((val: SellerProps, i: number) => (
        <Seller key={i} {...val} />
      ))}
      {data?.length === 0 && (
        <div className="flex justify-center items-center h-screen -mt-20 space-x-5">
          <img src="/img/search.png" alt="search" className="w-20 h-20" />
          <div>
            <h1 className="text-2xl font-bold">No Seller Found</h1>
            <p className="text-gray-500 mt-1">
              We couldn t find any seller near your location
            </p>
          </div>
        </div>
      )}
      <div className="h-5 w-full pb-48" />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
