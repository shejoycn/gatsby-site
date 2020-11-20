import React from "react"
import { RedFooter, GreenFooter } from "./Footer"
import { Navbar } from "./Navbar"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <RedFooter />
      <GreenFooter />
    </>
  )
}

export default Layout
