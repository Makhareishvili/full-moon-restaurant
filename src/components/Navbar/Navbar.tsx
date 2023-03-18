import "./Navbar.css";
import images from "../../constants/images";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.fullMoon} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="About">About</a>
        </li>
        <li className="p__opensans">
          <a href="Menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="Awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="Awards">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#loging" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <MenuIcon
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <CloseIcon
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="About">About</a>
              </li>
              <li className="p__opensans">
                <a href="Menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="Awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="Awards">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
