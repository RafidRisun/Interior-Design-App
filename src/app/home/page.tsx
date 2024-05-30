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

interface Design{
  title: string;
  description: string;
  category: string;
  style: string;
  grade: string;
  rate: number;
}

export default function Home() {
  const router = useRouter();

  const [feat1, setFeat1] = useState<Design | undefined>(undefined);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/design/4');
        setFeat1(res.data);
      } catch (error) {
        console.error("Failed to fetch data");
      }
    };
    fetchData();
  }, [router]); 
    
   
  return(
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="flex w-80 h-36 m-3 relative cursor-pointer">
        <Image 
          alt="kitchen1 image"
          src={kitchen1}
          className="object-cover"
        />
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
          Kitchen
        </div>
      </div>
      <div className="flex items-center w-80 h-36">
        <div className="flex w-32 h-36 mr-3 relative cursor-pointer">
          <Image 
            alt="closet1 image"
            src={closet1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6 absolute font-century">
            Closet
          </div>
        </div>
        <div className="flex flex-grow items-center bg-white w-44 h-36 font-century text-m"> 
          SEE THE<br/> CATEGORY <br/> THAT YOU ARE LOOKING FOR?
        </div>
      </div>
      <div className="flex w-80 h-36 m-3 relative cursor-pointer">
        <Image 
          alt="livingroom1 image"
          src={livingroom1}
          className="object-cover"
        />
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
          Living Room
        </div>
      </div>
      <div className="flex w-80 h-36 space-x-3">
        <div className="flex w-1/2 relative cursor-pointer">
          <Image 
            alt="bedroom1 image"
            src={bedroom1}
            className="object-cover"
          />
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6 absolute font-century">
            Bedroom
          </div>
        </div>
        <div className="flex w-1/2 relative cursor-pointer">
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
      <div className="flex m-10 font-century text-m cursor-pointer"><u>All Categories</u></div>
      {feat1 &&(
        <div>
        <div className="flex justify-center bg-slate-500 w-60 h-64 mt-3">Featured1</div>
        <div className="flex items-center justify-center font-century text-2xl bg-custom-yellow w-60 h-10">{feat1.title}</div>
        <div className="flex font-century text-lg m-2 w-60 h-10 mb-32">{feat1.description}</div>
        </div>
      )}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pl-32">
          <div className="flex justify-center bg-slate-500 w-60 h-64">Featured2</div>
          <div className="flex items-center justify-end pr-4 font-century text-2xl bg-custom-yellow w-60 h-10">Title2</div>
          <div className="flex font-century text-lg text-right p-2 w-60 h-10 mb-32">askhdas dhkasdhka sdgash kdj</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pr-32">
          <div className="flex justify-center bg-slate-500 w-60 h-64">Featured3</div>
          <div className="flex items-center pl-4 font-century text-2xl bg-custom-yellow w-60 h-10">Title3</div>
          <div className="flex font-century text-lg text-left p-2 w-60 h-10 mb-32">askhdas dhkasdhka sdgash kdj</div>
        </div>
      </div>
      <div className="flex justify-center m-10 mb-40 font-century text-m cursor-pointer"><u>See All</u></div>
      
      
    </div>
    
    
  );
}
