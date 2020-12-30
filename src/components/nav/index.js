import { Link } from "gatsby"
import React from "react"
import "./index.css"

export const Navigation = ({ isOpen, onToggle, headerActive }) => {
  const linkProps = {
    className: "nav-item",
  }
  return (
    <div>
      <div className="menu">
        <input
          type="checkbox"
          href="#"
          checked={isOpen}
          readOnly
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
        <>
          <nav className={`nav ${headerActive ? "nav-backed shadow-sm" : ""}`}>
            <Link
              {...linkProps}
              to="/work"
              onClick={onToggle}
              style={{ ["--index"]: 0 }}
            >
              Work
            </Link>
            <Link
              {...linkProps}
              to="/experience"
              onClick={onToggle}
              style={{ ["--index"]: 1 }}
            >
              Experience
            </Link>
            <Link
              {...linkProps}
              onClick={onToggle}
              to="/contact"
              style={{ ["--index"]: 2 }}
            >
              Contact
            </Link>
          </nav>
          <div className="nav-backdrop" onClick={onToggle} />
        </>
      )}
    </div>
  )
}
