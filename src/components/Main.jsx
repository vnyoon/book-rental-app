import React, { memo } from 'react'

import { Outlet } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Main = memo(() => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="bg-red-300 flex-1 container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar/>
        
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
})

export default Main