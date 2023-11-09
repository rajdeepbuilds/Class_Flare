import React from 'react'
import SideBarNavs from '../_components/SideBarNavs'
import Image from 'next/image';
import Header from '../_components/Header';



function homeLayout({children}) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed insery-y-0 z-50'>
        <SideBarNavs />
      </div>
      <Header/>
      <div className='ml-64 p-6'>
        {children}
      </div>
      
    </div>
  );
}

export default homeLayout