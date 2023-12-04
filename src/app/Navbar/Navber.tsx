import { getCart } from "@/lib/db/cart";
import { redirect } from "next/navigation";
import React from "react";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProduct(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();
  return (
    <div className=" bg-customTheme">
      <div className="navbar m-auto max-w-4xl flex flex-col sm:flex-row">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="/honeyhut logo.png" alt="logo" className="w-[120px] " />
          </a>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProduct}>
            <div className="form-control">
              <input
                type="text"
                placeholder="searchQuery"
                className="input input-bordered w-full min-w-[150px]"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
        </div>
      </div>
    </div>
  );
}
