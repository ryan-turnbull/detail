import "./index.css"

import React from "react"

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
      className={`flex flex-row justify-between items-center w-screen fixed p-4 layout-header ${headerBackgroundClass}`}
    >
      <Logo className="w-16 h-16" />
    </header>
  )
}

export const Layout = ({ children, titleContent }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        <div className="layout-title-content flex justify-center items-center min-h-screen">
          {titleContent}
        </div>
        {children}
      </main>
    </div>
  )
}
