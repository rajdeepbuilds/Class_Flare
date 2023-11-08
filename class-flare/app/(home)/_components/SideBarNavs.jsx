"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Layout, Mail, Search, Shield } from "lucide-react";

function SideBarNavs() {
    const menuList=[
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/Browse'
        },
        {
            id:2,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
        {
            id:4,
            name:'Newsletter',
            icon:Mail,
            path:'/newsletter'
        },
    ]
    const [activeIndex,setActiveIndex]=useState();
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b">
        <Image src="/logoflare.png" alt="logo" width={170} height={100} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-[#84FF50] cursor-pointer hover:text-black transition-all ease-in-out ${activeIndex==index?'bg-[#84FF50] text-green-900':null}`}
          onClick={()=>setActiveIndex(index)}
          >
            
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarNavs
