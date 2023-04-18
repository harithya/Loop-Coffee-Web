/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  onClick: () => void;
}
const MyLocationButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="absolute z-[9999] bottom-5 right-3">
      <button
        className="h-10 w-10 flex justify-center items-center rounded-md bg-white  border border-gray-200 shadow-md"
        onClick={onClick}
      >
        <img src="/icons/location.svg" alt="location" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MyLocationButton;
