import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className="btm-nav absolute opacity-1 border-t bg-white drop-shadow-xl">
      <Link href={"/app/home"} className="active hover:bg-gray-200">
        <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Explore</span>
      </Link>
      <button className="hover:bg-gray-200">
        <ShoppingBagIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Keranjang</span>
      </button>
      <button className="hover:bg-gray-200">
        <UserIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
