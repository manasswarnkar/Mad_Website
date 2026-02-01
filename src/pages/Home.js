import React from "react";
import hero from "../assets/440-home.png";
import sponsor1 from "../assets/sponsor1.png";
import sponsor2 from "../assets/sponsor2.png";
import sponsor3 from "../assets/sponsor3.png";
import sponsor4 from "../assets/sponsor-logo4.png";
import sponsor5 from "../assets/sponsor-logo5.png";
// import IGcomponent from "../components/IGcomponent";
import AboutUsCard from "../components/AboutUsCard";
import saksham from "../assets/home-about.png";
import sakshammobile from "../assets/home-about-mobile.png";
// import { Helmet } from "react-helmet";
// import {useRef} from 'react';


const Home = () => {
  return (
    <div className="homePage">
      <div className="hero-home">
        <img src={hero} alt="hero"/>
      </div>
      <AboutUsCard regbtn={1} image={saksham} imagemobile={sakshammobile} desc={"DoReMiPa is the official annual inter-college music competition of Delhi Technological University(DTU) organized by Madhurima - the music society of DTU, which is held under ENGIFEST- the largest cultural fest of north India. DoReMiPa includes six musical competitions that showcase a diverse array of musical styles, encompassing Indian, Western, and Instrumental genres and draws participation from all major colleges in the Delhi NCR as well as other parts of India. The competition is judged by professional musicians who are well established within their respective domains."} check={true}/>
      <div className="sponsors">
        <p className="content-sponsors">Sponsors</p>
        <div className="current-sponsors">
          <img src={sponsor1} alt="sponsor1" className="current-sponsor" />
          <img src={sponsor2} alt="sponsor2" className="current-sponsor" />
          <img src={sponsor3} alt="sponsor3" className="current-sponsor" />
        </div>
      </div>
      <div className="sponsors">
        <p className="content-sponsors">Past Sponsors</p>
        <div className="current-sponsors">
          <img src={sponsor1} alt="sponsor1" className="current-sponsor" />
          <img src={sponsor2} alt="sponsor2" className="current-sponsor" />
          <img src={sponsor3} alt="sponsor3" className="current-sponsor" />
          <img src={sponsor4} alt="sponsor4" className="current-sponsor" />
          <img src={sponsor5} alt="sponsor5" className="current-sponsor" />
        </div>
      </div>
      {/* <div className="ig-embed">
        <div className="ig-small">
          <IGcomponent/>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
