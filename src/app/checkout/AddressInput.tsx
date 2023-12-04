import { redirect } from "next/dist/server/api-utils";
import React from "react";

async function addAddressHandler(formData: FormData) {
  "use server";
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const addressLine1 = formData.get("addressLine1")?.toString();
  const addressLine2 = formData.get("addressLine2")?.toString();
  const locality = formData.get("locality")?.toString();
  const administrativeDistrictLevel1 = formData
    .get("administrativeDistrictLevel1")
    ?.toString();
  const postalCode = formData.get("postalCode")?.toString();
  const country = formData.get("country")?.toString();
  const email = formData.get("email")?.toString();
}

export default function AddressInput() {
  return (
    <form className={`text-sm md:text-lg}`} action={addAddressHandler}>
      <div className="flex mb-2 md:mb-4 gap-x-5 ">
        <div className="w-1/2">
          <label htmlFor="name" className="block">
            First Name
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="name" className="block">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>
      <div className="flex mb-4 gap-x-5">
        <div className="w-full">
          <label htmlFor="addressLine1" className="block">
            Address 1<span className="text-primary-red">*</span>
          </label>
          <div className="flex">
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              className="border border-gray rounded-sm p-2 w-full mr-2"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="addressLine2" className="block">
            Address 2
          </label>
          <input
            type="text"
            id="apartment"
            name="addressLine2"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>
      <div className="mb-4 flex gap-x-5">
        <div className="w-full">
          <label htmlFor="locality" className="block">
            Town / City
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="locality"
            name="locality"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>

        <div className="w-full">
          <label htmlFor="administrativeDistrictLevel1  " className="block">
            State
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="administrativeDistrictLevel1"
            name="administrativeDistrictLevel1"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label htmlFor="postalCode" className="block">
            ZIP Code
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>

      <div className="flex  mb-4 gap-x-5">
        <div className="w-full">
          <label htmlFor="country" className="block">
            <span>Country</span> / <span>Region</span>
            <span className="text-primary-red">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray rounded-sm p-2 w-full"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className={`bg-customTheme rounded-lg text-primary px-6 py-3  hover:bg-primary-red`}
        >
          Add Address
        </button>
      </div>
    </form>
  );
}
