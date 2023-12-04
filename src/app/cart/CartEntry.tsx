"use client";
import { useTransition } from "react";
import { formatPrice } from "@/components/formatPrice";
import { cartWithProduct } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";

import { setProductQuantity } from "./action";

interface CartEntryProps {
  cartItem: cartWithProduct;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOption: JSX.Element[] = [];
  for (let i = 1; i < 100; i++) {
    quantityOption.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-lg w-[200px] h-[200px]"
        />

        <div>
          <Link
            href={"/product/" + product.id}
            className="font-bold text-[10pt]"
          >
            {product.name}
          </Link>
          <div>Price: {formatPrice(parseFloat(product.price))}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select select-border w-full max-w-[90px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 remove</option>
              {quantityOption}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(parseFloat(product.price) * quantity)}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
