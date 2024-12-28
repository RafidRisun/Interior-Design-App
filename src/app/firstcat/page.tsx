"use client"
import Image from "next/image";
import kitchen1 from '@/images/kitchen1.jpg';
import livingroom1 from '@/images/livingroom1.webp'
import closet1 from '@/images/closet1.jpg'
import bedroom1 from '@/images/bedroom1.jpg'
import balcony1 from '@/images/balcony1.jpg'
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';


export default function FirstCategory() {
  const router = useRouter();
  const [cat, setCat] = useState<string>(''); // Initialize state for category
    
  useEffect(() => {
    const category = Cookies.get('category');
    console.log(category);

    if (!category) {
      router.push('/home');
      return;
    }
    const subcat = Cookies.get('subcategory');
    if (subcat) {
      Cookies.remove('subcategory')
      router.refresh();
      return; // Stop further execution if redirecting
    }

    // Set the retrieved category to state
    setCat(category);
  }, [router]);
   
  
  const handleCategoryClick = (category: any) => {
    document.cookie = `subcategory=${category}; path=/;`;

    router.push('/secondcat');
  };

  return(
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
      <Navbar/>
      </div>
      <div className="flex flex-col justify-center items-center mt-36">
      <div className="flex justify-start items-start w-80">
      <div className="flex items-center w-36 h-8 bg-custom-yellow pl-3 font-century text-lg fixed z-20">{cat}</div></div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center w-80 space-x-3 pt-12">
          <div className="flex flex-col items-center w-1/2 h-72 space-y-3">
            <div className="flex w-full h-1/2 relative cursor-pointer" onClick={() => handleCategoryClick('subcategory1')}>
              <Image
                alt="kitchen1 image"
                src={kitchen1}
                className="object-cover w-full h-full"
              />
              <div className="flex items-center justify-center bg-custom-yellow w-full h-6 absolute bottom-0 left-0 font-century">
                Style 1
              </div>
            </div>
            <div className="flex w-full h-1/2 relative cursor-pointer" onClick={() => handleCategoryClick('subcategory2')}>
              <Image
                alt="closet1 image"
                src={closet1}
                className="object-cover w-full h-full"
              />
              <div className="flex items-center justify-center bg-custom-yellow w-full h-6 absolute bottom-0 left-0 font-century">
                Style 2
              </div>
            </div>
          </div>
          <div className="flex w-1/2 h-72 relative cursor-pointer" onClick={() => handleCategoryClick('subcategory3')}>
            <Image 
              alt="balcony1 image"
              src={balcony1}
              className="object-cover w-full h-full"
            />
            <div className="flex items-center justify-center bg-custom-yellow w-full h-6 absolute bottom-0 left-0 font-century">
              Style 3
            </div>
          </div>
        </div>
        <div className="flex w-full space-x-3">
        <div className="flex w-1/2 h-36 mt-3 relative cursor-pointer" onClick={() => handleCategoryClick('subcategory4')}>
            <Image 
              alt="kitchen1 image"
              src={kitchen1}
              className="object-cover w-full h-full"
            />
            <div className="flex items-center justify-center bg-custom-yellow w-full h-6 absolute bottom-0 left-0 font-century">
              Style 4
            </div>
        </div>
        <div className="flex w-1/2 h-36 mt-3 relative cursor-pointer" onClick={() => handleCategoryClick('subcategory5')}>
            <Image 
              alt="bedroom1 image"
              src={bedroom1}
              className="object-cover w-full h-full"
            />
            <div className="flex items-center justify-center bg-custom-yellow w-full h-6 absolute bottom-0 left-0 font-century">
              Style 5
            </div>
        </div>
        </div>
        
        
      </div>
      
      </div>
    </div>
    
    
  );
}
