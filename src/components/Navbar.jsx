import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 pt-3">
          REACT.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
