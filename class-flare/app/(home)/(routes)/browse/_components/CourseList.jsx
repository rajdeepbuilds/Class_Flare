import Image from 'next/image'
import React from 'react'

function CourseList({courses}) {
  return (
    <div className='mt-5 grid grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-5 '>
        {courses.map((course,index)=>(
            <div key={index}
            className='bordrd rounded-lg p-2'>
                <Image src={course.banner.url}
                alt={course.name}
                width={1000}
                height={100}
                className='rounded-lg'
                />
                <div>
                    <h2  className='text-[18px] md:text-[16px] font-medium'>{course.name}</h2>
                    <h2 className='text-gray-400 text-[14px]'>{course.author}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CourseList