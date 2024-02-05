import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  IoHomeOutline,
  IoBulbOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { FaShareAltSquare } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useState } from "react";
const Root = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="container">
      <header className=" py-3  flex justify-between md:items-center">
        <h1 className=" font-monto font-bold font-serif  text-logo text-2xl">
          <span className="text-oily capitalize">a</span>braham .
        </h1>
        <nav className="md:flex hidden uppercase  justify-between text-oily  gap-4">
          <NavLink className={"focus:text-logo"}>home</NavLink>
          <NavLink className={"focus:text-logo"} to="about">
            about
          </NavLink>
          <NavLink className={"focus:text-logo"} to="blog">
            blog
          </NavLink>
          <NavLink className={"focus:text-logo"} to="contact">
            contact
          </NavLink>
          <NavLink className={"focus:text-logo"} to="help">
            help
          </NavLink>
        </nav>
        <div className="md:hidden">
          <div
            className="pt-2 text-white"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size="20px" />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0  w-[60%] bg-slate-900 h-full pt-3 border-r ease-in-out duration-500 border-gray-400 pl-3"
                : "fixed  left-[-100%]"
            }
          >
            <h1 className=" font-monto font-bold font-serif  text-logo text-2xl">
              <span className="text-oily capitalize">a</span>braham .
            </h1>
            <nav className="flex flex-col text-sm text-white font-monto justify-between py-5 uppercase  gap-6">
              {/* home div */}
              <div className="flex items-center">
                <IoHomeOutline size={20} />
                <NavLink className={" focus:text-red-400 mx-2 "}>home</NavLink>
              </div>
              {/* about section */}
              <div className="flex items-center">
                <IoBulbOutline size={20} />
                <NavLink className={" focus:text-red-400 mx-2 "} to="about">
                  about
                </NavLink>
              </div>
              {/* blog section  */}
              <div className="flex items-center">
                <FaShareAltSquare size={20} />
                <NavLink className={" focus:text-red-400 mx-2 "} to="blog">
                  blog
                </NavLink>
              </div>
              {/* contact section  */}
              <div className="flex items-center">
                <MdOutlineMarkEmailRead size={20} />
                <NavLink className={" focus:text-red-400 mx-2 "} to="contact">
                  contact
                </NavLink>
              </div>
              {/* help section */}
              <div className="flex items-center">
                <IoChatbubbleEllipsesOutline size={20} />
                <NavLink className={" focus:text-red-400 mx-2 "} to="help">
                  help
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
