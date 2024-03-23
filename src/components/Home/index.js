import { Component } from "react";
import Header from "../Header";
// import { Content } from "./styledComponents";
import ThemeContext from "../../context/ThemeContext";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDarkTheme } = value;
         const faceBookImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_9_chmcur.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/Facebook_clwh6h.png";
      const instaGramImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_7_sztain.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/Instagram_o6hcl2.png";
      const twitterImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_8_iphxdy.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/Twitter_vgdose.png";
      const githubImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_10_fg1ddb.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/GitHub_tmrfwi.png";
      const linkedInImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_11_tfdqgy.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117260/GitHub_tmrfwi.png";
      const telegramImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_12_ile09b.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117261/Telegram_zs1k57.png";
      const kooImage = isDarkTheme
        ? "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711164089/Group_10_fg1ddb.png"
        : "https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711117261/Koo_xyrtqc.png";
          const contentClass = isDarkTheme ? "content-dark" : "content-light";
          const nameClass = isDarkTheme ? "name-dark" : "name-light";
          const descriptionClass = isDarkTheme
            ? "description-dark"
            : "description-light";
          const spanClass = isDarkTheme ? "span-dark" : "span-light";

          return (
            <div>
              <Header />
              <div className={contentClass}>
                <div className="social-media-section">
                  <img
                    src={faceBookImage}
                    alt="facebook"
                    className="social-image"
                  />
                  <img
                    src={instaGramImage}
                    alt="instagram"
                    className="social-image"
                  />
                  <img
                    src={twitterImage}
                    alt="twitter"
                    className="social-image"
                  />
                  <img
                    src={githubImage}
                    alt="github"
                    className="social-image"
                  />
                  <img
                    src={linkedInImage}
                    alt="linkedin"
                    className="social-image"
                  />
                  <img
                    src={telegramImage}
                    alt="telegram"
                    className="social-image"
                  />
                  <img src={kooImage} alt="koo" className="social-image" />
                </div>
                <div className="intro-section">
                  <button type="button" className="hello-btn">
                    Hello!
                  </button>
                  <h1 className={nameClass}>
                    I'm <span className={spanClass}>Anish</span>👋
                  </h1>
                  <p className={descriptionClass}>
                    UI/UX Designer Front-End Developer & Thinker Based in India.
                  </p>
                  <div className="button-section">
                    <button type="button" className="download-btn">
                      Download Cv
                    </button>
                    <button type="button" className="touch-btn">
                      Get in Touch!
                    </button>
                  </div>
                </div>
                <div className="hero-section">
                  <img
                    src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711089607/Hero_Image_d0sry4.png"
                    alt="hero"
                    className="hero_image"
                  />
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Home;
