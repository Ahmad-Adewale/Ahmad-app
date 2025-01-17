//import { NavLink } from "react-router-dom"
import { navMenuItems } from "../constants"

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        {
          navMenuItems.map(link => (
            <a key={link.id} href={link.href} className="nav-link cursor-pointer">
              {link.label}
            </a>
          ))
        }
      </nav>
    </header>
  )
}

export default Nav
