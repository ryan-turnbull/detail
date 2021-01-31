import "./index.css"

import React, { useState } from "react"
import { Link } from "gatsby"

import useScrollPosition from "@react-hook/window-scroll"

import LogoLight from "../../assets/svg/logo.svg"
import LogoDark from "../../assets/svg/logo-dark.svg"
import { Navigation } from "../nav"

interface LayoutProps {
  children: React.ReactNode
  titleContent: any
  titleWrapperClassName?: string
  showFooter?: boolean
}

const Header = ({ menuOpen, onMenuToggle }) => {
  const scrollY = useScrollPosition(30)
  const headerActive = scrollY > 100
  const headerBackgroundClass = headerActive
    ? "bg-white shadow-sm"
    : "layout-header-default"

  return (
    <header
      className={`w-screen fixed p-4 layout-header z-10 ${headerBackgroundClass}`}
    >
      <div className="flex flex-row justify-between items-center max-w-4xl mx-auto">
        <Link to="/" aria-label="Home link">
          <LogoDark className="w-16 h-16" />
        </Link>
        <Navigation
          isOpen={menuOpen}
          onToggle={onMenuToggle}
          headerActive={headerActive}
        />
      </div>
    </header>
  )
}

export const Layout = ({
  children,
  titleContent,
  titleWrapperClassName,
  showFooter,
}: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const contentClassName = `layout-wrapper ${
    menuOpen ? "layout-wrapper-menu-open" : ""
  }`

  return (
    <div>
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(o => !o)} />
      <main className="layout-main">
        <div className="layout-title-content flex justify-center items-center pt-48 sm:pt-0">
          <div
            className={
              titleWrapperClassName
                ? `${titleWrapperClassName} ${contentClassName}`
                : `max-w-xl w-screen text-center mx-auto relative px-6 ${contentClassName}`
            }
          >
            {titleContent}
          </div>
        </div>
        <div className={`layout-body-content px-4 ${contentClassName}`}>
          {children}
        </div>
      </main>
      {showFooter && (
        <footer className="h-44 sm:h-56 bg-blue-50 px-6">
          <div className="flex flex-row items-center justify-between max-w-3xl mx-auto h-full">
            <nav className="footer-nav">
              <Link to="/work">Work</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <LogoDark className="h-16 w-16" />
          </div>
        </footer>
      )}
    </div>
  )
}
