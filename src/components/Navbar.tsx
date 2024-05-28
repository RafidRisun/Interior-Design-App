import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-center items-end h-32 mb-4 sticky">
      <div className="flex justify-center p-4 cursor-pointer hover:bg-slate-100 rounded-md text-xl font-century">
        Home
      </div>
      <div className="flex justify-center p-4 font-century cursor-pointer hover:bg-slate-100 rounded-md text-xl">
        Category
      </div>
    </div>
  );
};

export default Navbar;
