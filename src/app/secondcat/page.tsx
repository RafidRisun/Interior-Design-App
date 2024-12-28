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
  const [subcat, setSubCat] = useState<string>(''); 
    
  useEffect(() => {
    const category = Cookies.get('category');
    console.log(category);

    if (!category) {
      router.push('/home');
      return;
    }

    // Set the retrieved category to state
    setCat(category);
    const subcategory = Cookies.get('subcategory');
    console.log(subcategory);

    if (!subcategory) {
      router.push('/firstcat');
      return;
    }

    setSubCat(subcategory);
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
      <div className="flex justify-start items-start w-80 space-y-12">
      <div className="flex items-center w-36 h-8 bg-custom-yellow pl-3 font-century text-lg fixed z-20">{cat}</div>
      <div className="flex items-center w-28 h-6 bg-custom-yellow pl-3 font-century text-sm fixed z-20">{subcat}</div></div></div>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center items-center w-80">
          <div className="flex w-80 h-36 bg-custom-yellow">
          asd
          </div>
        </div>
      </div>
      
      
      
    </div>
    
    
  );
}
