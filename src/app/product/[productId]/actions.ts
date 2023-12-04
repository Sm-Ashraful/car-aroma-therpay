"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  // check cart if no cart exists then creat a cart
  const cart = (await getCart()) ?? (await createCart());

  //   now check if the articles is in cart
  if (cart) {
    const articleInCart = cart.items.find(
      (item) => item.productId === productId
    );
    //   if cart exists then increment the quantity, otherwise create a new cartItem
    if (articleInCart) {
      await prisma.cartItem.update({
        where: { id: articleInCart.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: productId,
          quantity: 1,
        },
      });
    }
  }
  revalidatePath("/product/[productId");
}
