import React from 'react'
import Dem from "../components/Navigation"
import { Outlet } from 'react-router'
const RootLayout = () => {
  return (
    <>
   <Dem/>
   <Outlet/>
    </>
  )
}

export default RootLayout
