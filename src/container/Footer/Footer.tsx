import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer_headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans"> +1 212-344-1230</p>
        <p className="p__opensans"> +1 212-344-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.fullMoon} alt="img" style={{ width: "200px" }} />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="img"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FacebookIcon sx={{ color: "white" }} />
          <TwitterIcon sx={{ color: "white" }} />
          <InstagramIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer_headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday_Sunday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
