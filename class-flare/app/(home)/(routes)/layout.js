import React from 'react'
import SideBarNavs from '../_components/SideBarNavs'
import Image from 'next/image';



function homeLayout({children}) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed insery-y-0 z-50'>
        <SideBarNavs />
      </div>
      {children}
    </div>
  );
}

export default homeLayout