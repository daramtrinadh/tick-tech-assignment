import React from "react";
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import "./index.css";

const AboutRoute = () => (
  <ThemeContext.Consumer>
    {(value) => {
      const { isDarkTheme } = value;
      const backgroundClass=isDarkTheme?'about-content-dark':'about-content-light'
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

        const line=isDarkTheme?'https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711185010/Line_6_1_fpfelt.png':'https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711184559/Line_6_juucnl.png';
        const smallLine=isDarkTheme?'https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711185010/Line_7_1_iffxcj.png':'https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711184602/Line_7_dd87cd.png';

      return (
        <>
          <Header />
          <div className={backgroundClass}>
            <div className="hand-content">
              <img
                src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711161156/Rectangle_iww1ck.png"
                alt="hand"
                className="handImage"
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
            <div className="description">
              <div>
              <div className="head">
                <h1>This is it;)</h1>
                <img src={line} alt="line" className="big-line"/>
                </div>
                <p>
                  Anish Kr. Sinha is an Indian UI/UX Designer & Front End
                  Developer with a passion for designing beautiful and fuctional
                  user experiences. Typically, he's Driven & permanently
                  Curious. He's obsessed with designing things and even more
                  obsessed with designing cool & clean stuff for the web and
                  mobile. He has been in the business of creating since he hung
                  his first painting on the wall when he was 11.
                </p>
                <p>
                  He holds a bachelor degree in Computer Applications. During
                  his graduation, he has been actively involved in the web
                  design community for the last 3 years. he has designed
                  websites for small businesses, events, nonprofits and more.
                  Currently he's based in Bihar, India. Where he's working as an
                  independent creative.
                </p>
                <p>
                  His interests, however, extend beyond the web and he loves
                  helping people with branding and print design. He even loves
                  designing 3D floor plan
                </p>
                <p>
                  When he's not designing, he's probably hanging out with his
                  girlfriend, watching series, sketching or messing around on
                  something inspired by YouTube tutorials.
                </p>
                <div className="smallLine">
                <img src={smallLine} alt="small" className="small-line"/>
                </div>
              </div>
              <div className="bubble">
                <img
                  src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711161155/Vector_4_dc4pgu.png"
                  alt="yellow"
                  className="yellow-bubble"
                />
                <img
                  src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711161156/Vector_5_ofbesc.png"
                  alt="grey"
                  className="grey-bubble"
                />
              </div>
            </div>
            <div className="endContent">
              <img
                src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1711161155/Vector_3_t86ss6.png"
                alt="end"
                className="endImage"
              />
            </div>
          </div>
        </>
      );
    }}
  </ThemeContext.Consumer>
);

export default AboutRoute;
