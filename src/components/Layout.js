import React from "react"
import Navbar from "./Navbar"
import BottomNav from "./Bottomnav"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <BottomNav />
      <Footer />
    </>
  )
}

export default Layout
