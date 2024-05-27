import "./Stylesheets/footerstyle.css";
import Footerslika from "./Slike/footerbook1.png";
import Facebook from "./Slike/facebook.png";
import Insta from "./Slike/instagram.png";
import Twitter from "./Slike/twitter.png";
import Tiktok from "./Slike/tiktok.png";
import Ukras from "./Slike/ukras2.png";

export default function Footer() {
  return (
    <div className="App">
      <div class="footer">
        <div class="footerslikadiv">
          <img src={Footerslika} class="footerslika" />
        </div>
        <center>
          <div class="footermain">
            <div class="footerprvi">
              <div class="footera">
                <div class="footerlogo">
                  <img src={Ukras} class="ukrasfooter" />
                  <h1>Knjigolovac</h1>
                </div>
                <p>Ana Čikeš</p>
              </div>
              <div class="footerb">
                <h2>Imate pitanja?</h2>
                <p>Broj mobitela : 123 456 789</p>
                <p>E-mail: info@knjigolovac.com</p>
              </div>
            </div>

            <div class="footerdrugi">
              <div class="icons">
                <a href="https://www.facebook.com/?locale=hr_HR">
                  {" "}
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.tiktok.com/">
                  <img src={Tiktok} alt="Tiktok" />
                </a>
                <a href="https://x.com/home">
                  {" "}
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/">
                  {" "}
                  <img src={Insta} alt="Instagram" />
                </a>
              </div>
            </div>
            <div class="footerc">
              <hr />
              <div class="copyright">
                <div class="rights">
                  <p>CopyRight@Knjigolovac. All Rights Reserved</p>
                </div>
                <div class="terms">
                  <p>Privacy</p>
                  <p>Terms of Service</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
