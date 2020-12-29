import { Link } from "gatsby"
import React from "react"
import "./index.css"

export const Hamburger = ({ isOpen, onToggle, headerActive }) => {
  return (
    <div className="relative">
      <div className="menu">
        <input
          type="checkbox"
          href="#"
          checked={isOpen}
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label
          className="menu-open-button"
          htmlFor="menu-open"
          onClick={onToggle}
        >
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
        </label>
      </div>
      {isOpen && (
        <nav className={`nav ${headerActive ? "nav-backed shadow-sm" : ""}`}>
          <Link
            className="nav-item"
            to="/work"
            onClick={onToggle}
            style={{ ["--index"]: 0 }}
          >
            Work
          </Link>
          <Link
            className="nav-item"
            to="/experience"
            onClick={onToggle}
            style={{ ["--index"]: 1 }}
          >
            Experience
          </Link>
          <Link
            className="nav-item"
            onClick={onToggle}
            to="/contact"
            style={{ ["--index"]: 2 }}
          >
            Contact
          </Link>
        </nav>
      )}
    </div>
  )
}
