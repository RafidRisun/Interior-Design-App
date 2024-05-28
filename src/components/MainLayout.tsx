import React from 'react'
import Navbar from './Navbar';

const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='bg-white w-full min-h-screen'>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout