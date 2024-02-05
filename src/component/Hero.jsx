import {useRef,useEffect} from "react";
import Typed from "typed.js";

const Hero = () => {
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["BTB ", "BTC ", "SASS"],
        typeSpeed: 180,
        backSpeed: 14,
        loop:'ture',
        startDelay: 100,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <div className="text-white">
      <div className=" container flex flex-col items-center justify-center w-full text-center max-w-[800px] mt-[-96px] h-screen">
        <p className=" text-logo font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl  md:text-7xl sm:text-6xl font-bold py-6">
          grow with data
        </h1>
        <p className=" text-xl sm:text-4xl md:text-5xl font-bold">
          fast, flexible financing for <span className="text-logo" ref={el} />
        </p>
        <p className="md:text-2xl py-3 text-gray-500 text-xl font-bold">monitor your data analytics to increase revenue for BTB , BTC,SASS</p>
        <button className="bg-logo w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-dark">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
