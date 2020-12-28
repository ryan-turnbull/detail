import "./index.css"

import React from "react"
import { Link } from "gatsby"

import useScrollPosition from "@react-hook/window-scroll"

import Logo from "../../assets/svg/logo.svg"

interface LayoutProps {
  children: React.ReactNode
  titleContent: any
}

const Header = () => {
  const scrollY = useScrollPosition(30)
  const headerBackgroundClass =
    scrollY > 100 ? "bg-white shadow-sm" : "layout-header-default"

  return (
    <header
      className={`flex flex-row justify-between items-center w-screen fixed p-4 layout-header z-10 ${headerBackgroundClass}`}
    >
      <Link to="/">
        <Logo className="w-16 h-16" />
      </Link>
    </header>
  )
}

export const Layout = ({ children, titleContent }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        <div className="layout-title-content flex justify-center items-center min-h-screen">
          <div className="max-w-xl w-screen text-center mx-auto relative px-8">
            {titleContent}
          </div>
        </div>
        <div className="layout-body-content px-8">{children}</div>
      </main>
    </div>
  )
}
