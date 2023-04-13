import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { HeaderProps } from "./Header";
import { useRouter } from "next/router";

const HeaderDetail: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100">
      <div className="navbar-start">
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default HeaderDetail;