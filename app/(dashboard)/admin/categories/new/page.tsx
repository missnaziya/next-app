"use client";
import { DashboardSidebar } from "@/components";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { convertCategoryNameToURLFriendly } from "../../../../../utils/categoryFormating";
import ENDPOINT from "../../../../../config/appConfig";
import Image from 'next/image';
const DashboardNewCategoryPage = () => {

  const [categoryInput, setcategoryInput] = useState<{
    name: string;
    href: string;
    image: string;
    
  }>({
    name: "",
    href: "",
    image: "",
  });

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("uploadedFile", file);

    try {
      const response = await fetch(ENDPOINT.BASE_URL + "/api/main-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("File upload unsuccessfull");
      }
    } catch (error) {
      console.error("Error happend while sending request:", error);
    }
  };

  const addNewCategory = () => {
    if (categoryInput.name.length > 0) {
      const requestOptions = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({
        //   name: convertCategoryNameToURLFriendly(categoryInput.name),
        // }),
        body: JSON.stringify(categoryInput),
      };
      // sending API request for creating new cateogry
      fetch(`${ENDPOINT.BASE_URL}/api/categories`, requestOptions)
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            throw Error("There was an error while creating category");
          }
        })
        .then((data) => {
          toast.success("Category added successfully");
          // setCategoryInput({
          //   name: "",
          // });

          setcategoryInput({
            name: "",
            href: "",
            image: "",
          });
        })
        .catch((error) => {
          toast.error("There was an error while creating category");
        });
    } else {
      toast.error("You need to enter values to add a category");
    }
  };
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Add new category</h1>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs" placeholder="Category Name"
              value={categoryInput.name}
              onChange={(e) =>
                setcategoryInput({ ...categoryInput, name: e.target.value })
              }
            />
          </label>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">HREF:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs" placeholder="/shop/categoryName"
              value={categoryInput.href}
              onChange={(e) =>
                setcategoryInput({ ...categoryInput, href: e.target.value })
              }
            />
          </label>
        </div>

        <div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-lg w-full max-w-sm"
            onChange={(e: any) => {
              uploadFile(e.target.files[0]);
              setcategoryInput({ ...categoryInput, image: e.target.files[0].name })
            }}
          />
          {categoryInput.image && (
            <Image
              src={`/` + categoryInput.image}
              alt={categoryInput.name}
              className="w-auto h-auto"
              width={100}
              height={100}
            />
          )}
        </div>

        <div className="flex gap-x-2">
          <button
            type="button"
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
            onClick={addNewCategory}
          >
            Create category
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNewCategoryPage;
