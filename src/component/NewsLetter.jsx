import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white ">
      <div className="grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 font-bold ">
            want tips and tricks to optimize your flow?
          </h1>
          <p className=" font-bold mt-2">
            sign up to our Newsletter and Stay up to date
          </p>
        </div>
        <div className="my-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full flex p-3 outline-none text-dark rounded"
            />
            <button className="bg-logo w-[200px] rounded-md ml-4 font-medium my-6 mx-auto py-3 text-gray-700">
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            we care about the protection of your data , read our
            <span className="text-logo"> privacy policy .</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
