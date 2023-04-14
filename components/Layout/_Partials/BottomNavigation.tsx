import React from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? "active" : "text-gray-400";
  };

  return (
    <div className="btm-nav  pwa:fixed browser:lg:absolute opacity-1 border-t bg-white drop-shadow-xl">
      <Link href={"/app/home"} className={`${isActive("/app/home")}  `}>
        <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Explore</span>
      </Link>
      <Link
        href={"/app/transaction"}
        className={`${isActive("/app/transaction")} `}
      >
        <ReceiptPercentIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Transaksi</span>
      </Link>
      <Link
        href={"/app/notification"}
        className={`${isActive("/app/notification")} `}
      >
        <BellIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Notifikasi</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
