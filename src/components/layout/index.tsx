import "./index.css"

import React, { useState } from "react"
import { Link } from "gatsby"

import useScrollPosition from "@react-hook/window-scroll"

import Logo from "../../assets/svg/logo.svg"
import { Hamburger } from "../hamburger"

interface LayoutProps {
  children: React.ReactNode
  titleContent: any
}

const Header = ({ menuOpen, onMenuToggle }) => {
  const scrollY = useScrollPosition(30)
  const headerActive = scrollY > 150
  const headerBackgroundClass = headerActive
    ? "bg-white shadow-sm"
    : "layout-header-default"

  return (
    <header
      className={`flex flex-row justify-between items-center w-screen fixed p-4 layout-header z-10 ${headerBackgroundClass}`}
    >
      <Link to="/">
        <Logo className="w-16 h-16" />
      </Link>
      <Hamburger
        isOpen={menuOpen}
        onToggle={onMenuToggle}
        headerActive={headerActive}
      />
    </header>
  )
}

export const Layout = ({ children, titleContent }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const contentClassName = `layout-wrapper ${
    menuOpen ? "layout-wrapper-menu-open" : ""
  }`

  return (
    <div>
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(o => !o)} />
      <main>
        <div className="layout-title-content flex justify-center items-center pt-48 sm:min-h-screen sm:pt-0">
          <div
            className={`max-w-xl w-screen text-center mx-auto relative px-6 ${contentClassName}`}
          >
            {titleContent}
          </div>
        </div>
        <div className={`layout-body-content px-6 ${contentClassName}`}>
          {children}
        </div>
      </main>
    </div>
  )
}
