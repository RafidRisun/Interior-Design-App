"use client";
import Image from "next/image";
import kitchen1 from '@/images/kitchen1.jpg';
import livingroom1 from '@/images/livingroom1.webp'
import closet1 from '@/images/closet1.jpg'
import bedroom1 from '@/images/bedroom1.jpg'
import balcony1 from '@/images/balcony1.jpg'
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Categories() {
  const router = useRouter();
  
  const handleCategoryClick = (category: string) => {
    // Set the cookie with js-cookie
    Cookies.set('category', category, { path: '/' });

    // Retrieve and log the cookie value
    const cat = Cookies.get('category');
    console.log('Category stored in cookie:', cat);

    // Redirect to the /firstcat page
    router.push('/firstcat');
  };

  return(
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
      <Navbar/>
      </div>
      
      <div className="flex flex-col justify-center items-center mt-32">
      <div className="flex w-80 h-36 m-3 relative cursor-pointer" onClick={() => handleCategoryClick('Category1')}>
        <Image 
          alt="kitchen1 image"
          src={kitchen1}
          className="object-cover"
        />
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
          Kitchen
        </div>
      </div>
      <div className="flex w-80 h-36 space-x-4">
        <div className="flex w-28 relative cursor-pointer" onClick={() => handleCategoryClick('Category2')}>
          <Image 
            alt="closet1 image"
            src={closet1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6 absolute font-century">
            Closet
          </div>
        </div>
        <div className="flex w-48 relative cursor-pointer" onClick={() => handleCategoryClick('Category3')}>
          <Image 
            alt="closet1 image"
            src={closet1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6 absolute font-century">
            Closet
          </div>
        </div>
      </div>
      <div className="flex w-80 h-36 m-3 relative cursor-pointer" onClick={() => handleCategoryClick('Category4')}>
        <Image 
          alt="livingroom1 image"
          src={livingroom1}
          className="object-cover"
        />
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-32 h-6 absolute font-century">
          Living Room
        </div>
      </div>
      <div className="flex w-80 h-36 space-x-3">
        <div className="flex w-1/2 relative cursor-pointer"  onClick={() => handleCategoryClick('Category5')}>
          <Image 
            alt="bedroom1 image"
            src={bedroom1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
            Bedroom
          </div>
        </div>
        <div className="flex w-1/2 relative cursor-pointer" onClick={() => handleCategoryClick('Category6')}>
          <Image 
            alt="balcony1 image"
            src={balcony1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
            Balcony
          </div>
        </div>
      </div>
      <div className="flex w-80 h-36  m-3 space-x-4">
        <div className="flex w-48 relative cursor-pointer" onClick={() => handleCategoryClick('Category7')}>
          <Image 
            alt="closet1 image"
            src={closet1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6 absolute font-century">
            Closet
          </div>
        </div>
        <div className="flex w-28 relative cursor-pointer" onClick={() => handleCategoryClick('Category8')}>
          <Image 
            alt="closet1 image"
            src={closet1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6 absolute font-century">
            Closet
          </div>
        </div>
      </div>
      <div className="flex w-80 h-36 relative cursor-pointer" onClick={() => handleCategoryClick('Category9')}>
        <Image 
          alt="livingroom1 image"
          src={livingroom1}
          className="object-cover"
        />
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-32 h-6 absolute font-century">
          Living Room
        </div>
      </div>
      <div className="flex w-80 h-36 m-3 relative cursor-pointer bg-slate-400 justify-center items-center font-century text-sm flex-col">
        <div>Can't find what youre looking for?</div><div><u>Contact Us!</u></div>
      </div>
      </div>
    </div>
    
    
  );
}
