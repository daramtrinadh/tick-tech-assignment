import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import {
  HeaderSection,
  LogoSection,
  UnOrderedList,
  HamburgerMenu,
  Name,
  LogoImage,
  ListItem,
} from "./styledComponents";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDarkTheme, toggleTheme } = value;
        const logoImage = isDarkTheme
          ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/Group_15_jonvi0.png"
          : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117262/Logo_mypkvx_d1lw4c.svg";
        const themeImage = isDarkTheme
          ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117261/Group_21_m8i8ia.png"
          : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117261/Moon_Black_a2llfz_vshaqv.svg";

        return (
          <HeaderSection isDarkTheme={isDarkTheme}>
            <LogoSection>
              <LogoImage src={logoImage} alt="logo" />
              <Name isDarkTheme={isDarkTheme}>ANISH KUMAR SINHA</Name>
            </LogoSection>
            <div className="align">
              <UnOrderedList menuOpen={menuOpen}>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link to="/" className="list-Item">
                    Home
                  </Link>
                </ListItem>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link to="/about" className="list-Item">
                    About
                  </Link>
                </ListItem>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link to="/resume" className="list-Item">Resume</Link>
                </ListItem>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link to="/skills" className="list-Item">Skills</Link>
                </ListItem>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link to="/projects" className="list-Item">Projects</Link>
                </ListItem>
                <ListItem isDarkTheme={isDarkTheme} className="list-Item">
                  <Link className="list-Item">Contact</Link>
                </ListItem>
              </UnOrderedList>

              <HamburgerMenu onClick={toggleMenu}>&#9776;</HamburgerMenu>
              <div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="theme-btn"
                >
                  {isDarkTheme ? (
                    <img src={themeImage} alt="light" />
                  ) : (
                    <img src={themeImage} alt="dark" />
                  )}
                </button>
              </div>
            </div>
            {/* {menuOpen && (
              <BackButton onClick={toggleMenu}>&#8592; Back</BackButton>
            )} */}
          </HeaderSection>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
