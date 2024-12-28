"use client"
import React from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const home = () => {
    router.push('/home');
  }
  
  const category = () => {
    router.push('/categories');
  }

  return (
    <div className="bg-white flex justify-center items-end h-32 mb-4 sticky">
      <div className="flex justify-center p-4 cursor-pointer hover:bg-slate-100 rounded-md text-xl font-century" onClick={home}>
        Home
      </div>
      <div className="flex justify-center p-4 font-century cursor-pointer hover:bg-slate-100 rounded-md text-xl" onClick={category}>
        Category
      </div>
    </div>
  );
};

export default Navbar;
