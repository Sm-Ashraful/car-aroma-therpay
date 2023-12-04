import { Cart, Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { cookies } from "next/dist/client/components/headers";

export type cartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type cartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCart = cartWithProducts & {
  size: number;
  subTotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localId = cookies().get("localId")?.value;
  const cart = localId
    ? await prisma.cart.findUnique({
        where: { id: localId },
        include: { items: { include: { product: true } } },
      })
    : null;
  if (!cart) {
    return null;
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subTotal: cart.items.reduceRight(
      (acc, item) => acc + item.quantity * parseFloat(item.product.price),
      0
    ),
  };
}

export async function createCart(): Promise<ShoppingCart | null> {
  const newCart = await prisma.cart.create({
    data: {},
  });
  //   need encription for production uses
  cookies().set("localId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subTotal: 0,
  };
}
