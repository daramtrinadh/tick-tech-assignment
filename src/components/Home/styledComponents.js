import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 30px;
    height: 100%;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    padding: 30px;
    height: 100%;
  }
`;

export const SocialMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  order: 3;

  @media screen and (max-width: 320px) {
    flex-direction: row;
  }
`;

export const SocialImage = styled.img`
  height: 20px;
  width: 20px;
  margin: 7px;
  cursor: pointer;
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  order: 2;
  margin: 20px;
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};

  @media screen and (max-width: 320px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711090583/Hero_Background_psaucl.png");
  background-size: cover;
  height: 74vh;
  padding: 30px;
  width: 40%;
  order: 1;

  @media screen and (max-width: 320px) {
    width: 100vw;
    height: 60vh;
    background-size: cover;
    margin-left: 15px;
  }

  @media screen and (max-width: 425px) {
    width: 100vw;
    height: 60vh;
    background-size: cover;
    margin-left: 15px;
  }
`;

export const HeroImage = styled.img`
  height: 110%;
  padding: 40px;
  margin-right: 45px;
`;

export const Name = styled.h1`
  font-size: 20px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HelloButton = styled.button`
  background: linear-gradient(to right, #40eff1, #94aead);
  color: white;
  border-width: 0px;
  border-radius: 18px;
  border-bottom-left-radius: 0px;
  padding: 10px 20px;
  font-weight: bold;
`;

export const DownloadButton = styled.button`
  background: linear-gradient(to right, #ec6d2d, #f1a680);
  color: white;
  border-color: #fcfaf9;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  margin: 10px;
`;

export const TouchButton = styled.button`
  background: linear-gradient(to right, #1f1e1d, #120e0c);
  color: white;
  border-color: #fcfaf9;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  margin: 10px;
`;

export const Span = styled.span`
  text-decoration: underline;
`;

export const UnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;

export const List = styled.li`
  margin: 10px;
`;
