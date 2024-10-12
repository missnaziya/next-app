// // *********************
// // Role of the component: Category wrapper that will contain title and category items
// // Name of the component: CategoryMenu.tsx
// // Developer: Aleksandar Kuzmanovic
// // Version: 1.0
// // Component call: <CategoryMenu />
// // Input parameters: no input parameters
// // Output: section title and category items
// // *********************

// // make category menu this dynamic
// "use client";
// import React, { useEffect, useState } from "react";
// import CategoryItem from "./CategoryItem";
// import Image from "next/image";
// import ENDPOINT from "../config/appConfig";
// const CategoryMenu = ({ onProductSelect }: { onProductSelect: () => void },{ handleMouseEnter }: { handleMouseEnter: () => void }) => {
//   const handleProductClick = () => {
//     onProductSelect(); // call the function to hide the category list
//   };
//   const [categoryMenuList2, setCategoryMenuList2] = useState([]);

//   useEffect(() => {
//     fetch(ENDPOINT.BASE_URL + "/api/categories/", { cache: "no-store" })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setCategoryMenuList2(data);
//       });
//   }, []);

//   return (
//     <div className="p-0 bg-white">
//       <div className="max-w-screen-2xl mx-auto py-2 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
//         {categoryMenuList2.map((item: any) => (
//           <CategoryItem title={item.name} key={item.id} href={item.href}>
//             {/* <Image
//             /> */}

//             <img 
//             onClick={handleProductClick}
//             src={`/${item.image}`}
//             width={48}
//             height={48}
//             alt={item.title}
//              />
//           </CategoryItem>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;

// // // *********************
// // // Role of the component: Category wrapper that will contain title and category items
// // // Name of the component: CategoryMenu.tsx
// // // Developer: Aleksandar Kuzmanovic
// // // Version: 1.0
// // // Component call: <CategoryMenu />
// // // Input parameters: no input parameters
// // // Output: section title and category items
// // // *********************

// // // make category menu this dynamic
// // 'use client';
// // import React, { useEffect, useState } from "react";
// // import CategoryItem from "./CategoryItem";
// // import Image from "next/image";
// // import { categoryMenuList } from "@/lib/utils";
// // import Heading from "./Heading";
// // import ENDPOINT from "../config/appConfig";
// // const CategoryMenu = ({ onProductSelect }: { onProductSelect: () => void }) => {
// //   const handleProductClick = () => {
// //     onProductSelect(); // call the function to hide the category list
// //   };
// //   const [categoryMenuList2, setCategoryMenuList2] = useState<{
// //       id: string;
// //       name: string;
// //       href: string;
// //       image: string;

// //     }>({
// //       id: "",
// //       name: "",
// //       href: "",
// //       image: "",
// //     });

// //   useEffect(() => {
// //     console.log("CategoryMenu***");
// //     fetch(ENDPOINT.BASE_URL+"/api/categories/", {cache: "no-store"})
// //       .then((res) => {
// //         return res.json();
// //       })
// //       .then((data) => {
// //         console.log("CategoryMenu*** data=", data)
// //         setCategoryMenuList2(data);
// //       });
// //   }, []);

// //   return (
// //     <div className="p-0 bg-white">
// //       <div className="max-w-screen-2xl mx-auto py-2 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
// //         {categoryMenuList.map((item) => (
// //           <CategoryItem  title={item.title} key={item.id} href={item.href}>
// //             <Image onClick={handleProductClick} src={item.src} width={48} height={48} alt={item.title} />
// //           </CategoryItem>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryMenu;

"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import ENDPOINT from "../config/appConfig";

const CategoryMenu = ({
  onProductSelect,
  handleMouseEnter,
  handleMouseLeave,
}: {
  onProductSelect: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) => {
  const handleProductClick = () => {
    onProductSelect(); // call the function to hide the category list
  };

  const [categoryMenuList2, setCategoryMenuList2] = useState([]);

  useEffect(() => {
    fetch(ENDPOINT.BASE_URL + "/api/categories/", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setCategoryMenuList2(data);
      });
  }, []);

  return (
    <div
    onClick={handleMouseLeave}
      className="p-0 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "100vw" }}
    >
      <div className="max-w-screen-2xl mx-auto py-2 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        {categoryMenuList2.map((item: any) => (
          <CategoryItem title={item.name} key={item.id} href={item.href}>
            <img
              onClick={handleProductClick}
              src={`/${item.image}`}
              width={48}
              height={48}
              alt={item.title}
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
