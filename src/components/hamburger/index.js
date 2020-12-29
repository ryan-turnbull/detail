import { Link } from "gatsby"
import React from "react"
import "./index.css"

export const Hamburger = () => {
  return (
    <div>
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
        </label>
        <Link to="/contact" className="menu-item">
          <span>C</span>
        </Link>
        <Link to="/experience" className="menu-item">
          <span>E</span>
        </Link>
        <Link to="/work" className="menu-item">
          <span>W</span>
        </Link>
      </nav>
      <svg
        height="50"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
