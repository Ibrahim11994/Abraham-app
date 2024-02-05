import React from 'react'
import single from '../image/single.png'
import double from "../image/double.png";
import triple from "../image/triple.png";

const Card = () => {
  return (
    <div className="w-full py-40 text-dark ">
      <div className="grid md:grid-cols-3 gap-8 ">
        <div className=" bg-white rounded-lg flex hover:scale-105 duration-150 flex-col my-4 shadow-sm shadow-gray-500">
          <img className="w-20 mx-auto bg-white pt-3 " src={single} alt="/" />
          <h2 className=" font-bold py-8 text-center text-2xl">single user</h2>
          <p className="text-center text-4xl font-monto font-bold">$149</p>
          <div className="text-center text-sm font-medium font-monto ">
            <p className="py-3 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-3 border-b mx-8 ">1 User Allowed</p>
            <p className="py-3 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-logo text-dark py-3 mx-auto rounded-md hover:bg-gray-400 my-6 font-monto w-[200px] text-center font-bold">
            Start Trail
          </button>
        </div>
        {/* second section */}
        <div className=" bg-gray-300 rounded-lg flex md:my-0 hover:scale-105 duration-150 flex-col my-8 shadow-sm shadow-gray-500">
          <img className="w-20 mx-auto bg-transparent pt-3 " src={double} alt="/" />
          <h2 className=" font-bold py-8 text-center text-2xl">double user</h2>
          <p className="text-center text-4xl font-monto font-bold">$249</p>
          <div className="text-center text-sm font-medium font-monto ">
            <p className="py-3 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-3 border-b mx-8 ">3 User Allowed</p>
            <p className="py-3 border-b mx-8">Send up to 10GB</p>
          </div>
          <button className="text-logo bg-dark py-3 mx-auto rounded-md hover:bg-gray-400 my-6 font-monto w-[200px] text-center font-bold">
            Start Trail
          </button>
        </div>
        {/* 3ed section */}
        <div className=" bg-white rounded-lg flex hover:scale-105 duration-150 flex-col my-4 shadow-sm shadow-gray-500">
          <img className="w-20 mx-auto bg-white pt-3 " src={triple} alt="/" />
          <h2 className=" font-bold py-8 text-center text-2xl">triple user</h2>
          <p className="text-center text-4xl font-monto font-bold">$349</p>
          <div className="text-center text-sm font-medium font-monto ">
            <p className="py-3 border-b mx-8 mt-8">1500 GB Storage</p>
            <p className="py-3 border-b mx-8 ">multi User Allowed</p>
            <p className="py-3 border-b mx-8">Send up to 20GB</p>
          </div>
          <button className="bg-logo text-dark py-3 mx-auto rounded-md hover:bg-gray-400 my-6 font-monto w-[200px] text-center font-bold">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card
