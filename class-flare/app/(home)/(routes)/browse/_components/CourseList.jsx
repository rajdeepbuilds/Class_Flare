import { DollarSign } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CourseList({courses}) {
  return (
    <div
      className="mt-5 grid grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-5 "
    >
      {courses.map((course, index) => (
        <Link href={'/course-preview/'+course.id}>
        <div key={index}
        
        className="border border-gray-200 rounded-lg p-2 cursor-pointer hover:border-green-500">
          <Image
            src={course.banner.url}
            alt={course.name}
            width={1000}
            height={100}
            className=" p-2 border-b border-[#84FF50]"
          />
          <div className="mt-2">
            <h2 className="text-[18px] md:text-[16px] font-medium">
              {course.name}
            </h2>
            <h2 className="text-gray-400 text-[14px]">{course.author}</h2>
          </div>
          <div className="flex items-center mt-2">
            <DollarSign className="h-6 w-6 text-green-700 rounded-full bg-green-100 p-[2px]" />
            <h2 className=" text-[14px]">{course.free ? "Free" : "Paid"}</h2>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseList