import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

import React from "react";
import FormSubmitButton from "@/components/FormSubmitButton";
async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const price = formData.get("price")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const category = formData.get("category")?.toString();
  const moq = formData.get("moq")?.toString();
  const details = formData.get("details")?.toString();

  if (!name || !price || !imageUrl || !category || !moq || !details) {
    throw Error("Missing required field");
  }

  await prisma.product.create({
    data: {
      name,
      price,
      imageUrl,
      category,
      moq,
      details,
    },
  });
  redirect("/");
}

export default function AddProducts() {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-2 z-[999] outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-[45rem]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add New Product</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 pt-3 flex-auto">
              <form className="text-sm font-jakarta" action={addProduct}>
                <div className="grid grid-cols-2 gap-x-3 w-full">
                  <div className="mb-[.5rem]">
                    <input
                      name="name"
                      placeholder="Product Name"
                      className=" border border-gray rounded-md p-2  w-full"
                    />
                  </div>
                  <div>
                    <input
                      name="price"
                      placeholder="ProductPrice"
                      className="border border-gray rounded-md p-2 w-full mb-[.5rem]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-3"></div>
                <div className="grid grid-cols-2 gap-x-3">
                  <div>
                    <input
                      name="moq"
                      placeholder="Minimum order quantity"
                      className="border border-gray rounded-md p-2 w-full mb-[.5rem]"
                    />
                  </div>

                  <div className="mb-[.5rem]">
                    <input
                      type="text"
                      name="category"
                      placeholder="Product Category"
                      className="border border-gray rounded-md p-2 w-full "
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    id="productImage"
                    name="imageUrl"
                    placeholder="Product Image Url"
                    required
                    className="mx-3 border border-gray rounded-md p-2 w-full mb-[.5rem]"
                  />
                </div>
                <div className="mb-[10px] grid grid-cols-2 gap-x-3">
                  <textarea
                    id="details"
                    name="details"
                    placeholder="Product Details"
                    className="border border-gray rounded-md p-2 w-full"
                    rows={5}
                  ></textarea>
                </div>

                <div className="flex mb-[.5rem]">
                  <FormSubmitButton className="bg-primary text-black font-bold rounded-md py-2 px-4 w-full hover:bg-gray transition-colors border border-white mt-4">
                    SUBMIT
                  </FormSubmitButton>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
    </div>
  );
}
