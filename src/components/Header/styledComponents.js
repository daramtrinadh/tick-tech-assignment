import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => (props.isDarkTheme ? "black" : "white")};
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const Name = styled.p`
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};
`;

export const UnOrderedList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: ${(props) => (props.menuOpen ? "0" : "-100%")};
    width: 100%;
    background-color: ${(props) => (props.isDarkTheme ? "black" : "white")};
    color: ${(props) => (props.isDarkTheme ? "white" : "black")};
    transition: left 0.3s ease-in-out;
  }
`;

export const ListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;
