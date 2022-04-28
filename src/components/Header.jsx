import logo from "../assets/logo.png"
import darklogo from "../assets/darklogo.png"
import { CgSun, CgDarkMode } from "react-icons/cg"

const Header = ({ dark, setDark }) => {
  return (
    <div className={dark ? "header" : "header-light"}>
      <img src={dark ? darklogo : logo} alt="logo" className="brand-logo" />
      <div
        className={dark ? "theme-switch" : "theme-switch-light"}
        onClick={() => setDark(!dark)}
      >
        {!dark ? (
          <CgDarkMode className="dark-icon" />
        ) : (
          <CgSun className="light-icon" />
        )}
      </div>
    </div>
  )
}
export default Header
