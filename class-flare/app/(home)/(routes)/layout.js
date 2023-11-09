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
      {children}
    </div>
  );
}

export default homeLayout