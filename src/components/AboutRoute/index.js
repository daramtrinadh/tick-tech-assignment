import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";

const AboutRoute = () => (
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
      return (
        <>
          <Header />
          <div className="about-content">
            <div className="hand-content">
              <img
                src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711161156/Rectangle_iww1ck.png"
                alt="hand"
              />
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
                <img src={githubImage} alt="github" className="social-image" />
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
            </div>
            <div></div>
          </div>
        </>
      );
    }}
  </ThemeContext.Consumer>
);
export default AboutRoute;
