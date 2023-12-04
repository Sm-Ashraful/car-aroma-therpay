import { formatPrice } from "@/components/formatPrice";
import { getCart } from "@/lib/db/cart";
import React from "react";
import AddressInput from "./AddressInput";

export default async function CheckoutPage() {
  const cart = await getCart();
  return (
    <div className="max-w-4xl m-auto py-5 px-3 md:px-0">
      <h1>Place Your Order by giving information</h1>
      <div className="flex justify-between items-center">
        <div>
          <p>Total Item: {cart?.size || 0}</p>
        </div>
        <div>
          <p>Total: {formatPrice(cart?.subTotal || 0)}</p>
        </div>
      </div>
      <div className="py-5">
        <h2 className="pb-4 font-bold text-xl">Billing Address</h2>
        <AddressInput />
      </div>
    </div>
  );
}
