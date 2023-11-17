"use client"
import React, { useEffect } from 'react'

function CoursePreview({params}) {
  useEffect(()=>{
    console.log(params.courseId);
  },[])
  return (
    <div>CoursePreview</div>
  )
}

export default CoursePreview