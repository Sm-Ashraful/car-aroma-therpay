import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { formatPrice } from "@/components/formatPrice";
import Link from "next/link";

export const metadata = {
  title: "Your checkout cart - honyhut",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <div className="max-w-4xl m-auto py-5">
      <h2 className="text-center font-bold text-xl">Checkout Cart</h2>
      <div>
        {cart?.items.map((cartItem) => {
          return <CartEntry cartItem={cartItem} key={cartItem.id} />;
        })}
        {!cart?.items.length && (
          <p>Your cart is currently Empty. Please Order First</p>
        )}
        <div className="flex flex-col items-end sm:items-center">
          <p className="mb-3 font-bold">
            Total: {formatPrice(cart?.subTotal || 0)}
          </p>
          <Link href="/checkout" className="btn btn-primary w-fil sm:w-[200px]">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
