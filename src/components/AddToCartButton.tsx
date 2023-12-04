"use client";
import { incrementProductQuantity } from "@/app/product/[productId]/actions";
import { useTransition, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  {
    /** use of useTransition hook
Marking a state update as a non-blocking transition
Updating the parent component in a transition
Displaying a pending visual state during the transition
Preventing unwanted loading indicators
Building a Suspense-enabled router
Displaying an error to users with a error boundary
*/
  }
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2 w-full justify-center text-center bg-customTheme rounded-full   text-white">
      <button
        className="px-6 py-2"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add To Cart
      </button>
      {isPending && <CircularProgress color="secondary" />}
      {!isPending && success && (
        <span className="text-[6pt] text-red-400 w-fit">Added to cart</span>
      )}
    </div>
  );
}
