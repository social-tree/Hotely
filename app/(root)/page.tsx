import React from "react";

function page() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="items-start px-20 flex justify-center bg-hero-image h-132 w-full bg-cover bg-top">
        <div className="pt-20 flex gap-2 flex-col max-w-screen-xl justify-between w-full">
          <h1 className=" font-secondary text-heading-xl w-96 text-white font-bold">
            Make your travel wishlist, we'll do the rest
          </h1>
          <p className="text-paragraph-m font-primary font-medium text-white">
            Special offers suit your plan
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
