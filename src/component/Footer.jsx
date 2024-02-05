import React from "react";

const Footer = () => {
  return (
    <div className=" py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className=" font-monto font-bold font-serif  text-logo text-2xl">
          <span className="text-oily capitalize">a</span>braham .
        </h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error
          quod laboriosam culpa inventore quo, nobis maiores eum rerum
          perspiciatis.
        </p>
        <div>icons</div>
      </div>
      <div className=" lg:col-span-2 flex justify-between">
        <div>
          <h6 className=" font-medium text-gray-400">solutions</h6>
          <ul className=" ">
            <li className="py-1 text-sm">analytics</li>
            <li className="py-1 text-sm">Marketing</li>
            <li className="py-1 text-sm">Commerce</li>
            <li className="py-1 text-sm">insights</li>
          </ul>
        </div>
        {/* second footer section */}
        <div>
          <h6 className=" font-medium text-gray-400">solutions</h6>
          <ul className=" ">
            <li className="py-1 text-sm">analytics</li>
            <li className="py-1 text-sm">Marketing</li>
            <li className="py-1 text-sm">Commerce</li>
            <li className="py-1 text-sm">insights</li>
          </ul>
        </div>
        {/* 3 footer section */}
        <div>
          <h6 className=" font-medium text-gray-400">solutions</h6>
          <ul className=" ">
            <li className="py-1 text-sm">analytics</li>
            <li className="py-1 text-sm">Marketing</li>
            <li className="py-1 text-sm">Commerce</li>
            <li className="py-1 text-sm">insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
