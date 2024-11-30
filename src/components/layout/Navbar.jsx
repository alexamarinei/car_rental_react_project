import React from "react"
import logo from "../../assets/images/logo.svg"
import "../../styles/navbar.css"

const MENU_ITEMS = [
  { title: "Become a renter", path: "/become-member" },
  { title: "Rental deals", path: "/deals" },
  { title: "How it works", path: "/how-it-works" },
  { title: "Why choose us", path: "/about" },
]

  const  Navbar = () => {
  const handleSignIn = () => {}

  const handleSignUp = () => {}

  return (
    <nav className="container">
      <div className="menu-pos flex-between">
        <img src={logo} alt="App Logo" />
        <div className="menu-list">
          <ul>
            {MENU_ITEMS.map(({ title, path }) => {
              return (
                <li key={path}>
                  <a href={path}>{title}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="btn-container pointer">
          <button onClick={handleSignIn}>Sign in</button>
          <button className="primary" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;