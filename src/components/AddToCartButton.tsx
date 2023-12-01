"use client";

interface AddToCartButtonProps {
  productId: String;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="w-full text-center bg-customTheme rounded-full"
        onClick={() => {}}
      >
        Add To Cart
      </button>
    </div>
  );
}
