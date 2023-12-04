import AddToCartButton from "@/components/AddToCartButton";
import CustomizedBreadcrumbs from "@/components/CustomiseBreadCrumbs";
import FormSubmitButton from "@/components/FormSubmitButton";
import { formatPrice } from "@/components/formatPrice";
import { prisma } from "@/lib/db/prisma";
import React from "react";
import { incrementProductQuantity } from "./actions";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });
  return (
    <>
      {product && (
        <section className="relative bg-white  ">
          <div className="flex flex-wrap px-[5px] md:pt-5">
            <div className="block md:hidden pt-5">
              <h3 className="text-xl md:text-3xl font-bold pt-3">
                {product?.name}
              </h3>
            </div>
            <div className="relative w-screen md:w-1/2   rounded flex flex-col justify-center md:justify-start items-center">
              <div className="relative overflow-hidden w-full ">
                <div
                  className={`relative flex justify-center w-full items-center overflow-hidden`}
                >
                  <img
                    src={product?.imageUrl}
                    alt="productImage"
                    className="w-full bg-cover h-full"
                  />
                </div>
              </div>
            </div>

            {/* Product Information and button */}
            <div className="md:pl-12  w-full md:w-1/2  md:relative">
              <div className="hidden md:block">
                <h3 className="text-3xl font-bold">{product?.name}</h3>
              </div>
              <div className="mb-2">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <div>
                <p className=" font-extrabold text-2xl py-4 title-font tracking-widest">
                  Price:{" "}
                  {product?.price && formatPrice(parseFloat(product.price))}
                </p>
                <div className="leading-relaxed ml-5 text-lg text-[#878787]">
                  <ul className="list-disc">
                    <li className="removeTextShadow">100% Authentic</li>
                    <li className="removeTextShadow">Top Quality Guarantee</li>
                    <li className="removeTextShadow">
                      Fast Free Shipping From The US
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 flex items-center">
                <AddToCartButton
                  productId={product.id}
                  incrementProductQuantity={incrementProductQuantity}
                />
              </div>
              <div className="flex items-center py-2 border-gray border-b-2"></div>

              {/*end Product Information and button */}

              {/**Product avialibility stock information */}
              <div className="pt-8">
                <p className="text-lg title-font tracking-widest text-gray-500">
                  Availability:
                  <span className="text-bold text-blue-500 pl-2">
                    {" "}
                    In Stock
                  </span>
                </p>
                <p className="text-lg title-font tracking-widest text-gray-500">
                  Category:
                  <span className="text-bold text-blue-500 pl-2">
                    {product?.category}
                  </span>
                </p>
                <p className="text-lg title-font tracking-widest text-gray-500">
                  Brand:
                  <span className="text-bold text-blue-500 pl-2">
                    Royal Honey, Malaysia
                  </span>
                </p>
              </div>
              {/**Product avialibility stock information end*/}
            </div>
            {/* Product Information and button end*/}
            {/* Product Information, shipping information */}
          </div>
        </section>
      )}
    </>
  );
}
