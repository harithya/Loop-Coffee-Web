import { ShoppingBagIcon, TruckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useReactToPrint } from "react-print";

const ShippingMethod = () => {
  return (
    <div>
      <div className="border-b">
        <div className="p-5 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <div className="btn animate-none btn-primary  btn-circle">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Pickup</h4>
                <p className="text-sm text-gray-500">
                  Ambil ke penjual tanpa antri
                </p>
              </div>
            </div>
            <button
              // htmlFor="modal-shipping"
              className="btn btn-sm btn-outline btn-primary"
            >
              Ubah
            </button>
          </div>
        </div>
      </div>
      {/* modal  */}
      <input type="checkbox" id="modal-shipping" className="modal-toggle" />
      <label
        htmlFor="modal-shipping"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="space-y-8">
            <div className="flex items-center space-x-5">
              <div className="btn animate-none btn-primary  btn-circle">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Pickup</h4>
                <p className="text-sm text-gray-500">
                  Ambil ke penjual tanpa antri
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="btn animate-none btn-secondary  btn-circle">
                <TruckIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Delivery</h4>
                <p className="text-sm text-gray-500">
                  Segera diantar ke alamat kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ShippingMethod;
