import React from "react";
import laptop from "../image/analytic.jpg";
const Analytics = () => {
  return (
    <div className="bg-dark">
      <div className="grid md:gap-8 md:grid-cols-2 ">
        <div>
          <img className=" w-full my-4 " src={laptop} alt="/" />
        </div>
        <div className="text-white flex flex-col justify-center ">
          <p className="text-logo md:text-xl font-bold">data analytics dashboard</p>
          <h1 className="md:text-4xl font-bold sm:text-3xl py-2 ">
            manage data analytics centrally
          </h1>
          <p className=" text-justify font-monto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque atque tempora asperiores expedita reprehenderit
            exercitationem distinctio, nostrum ducimus non voluptas laboriosam
            corrupti cupiditate explicabo nemo veniam tenetur. Possimus, nulla.
          </p>
          <button className="bg-black border-2 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
