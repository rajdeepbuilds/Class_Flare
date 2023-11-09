'use client'
import React, { useState } from 'react'

function CategoryFilter() {
    const [activeIndex,setActiveIndex]=useState(0)
    const filterOptions=[
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'React Js',
            value:'reactjs'
        },
        {
            id:3,
            name:'Next Js',
            value:'nextjs'
        },
        {
            id:4,
            name:'Tailwind Css',
            value:'tailwindcss'
        },
        {
            id:5,
            name:'Firebase',
            value:'firebase'
        }
    ]
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          onClick={() => setActiveIndex(index)}
          key={index}
          className={`border p-2 px-4 text-[12px] rounded-md hover:border-green-900 font-semibold hover:bg-[#84FF50]
          transition-all ease-linear ${
            activeIndex == index ? "border-green-900 bg-[#84FF50]" : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter