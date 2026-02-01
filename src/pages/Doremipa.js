import React from 'react'
import RazzmatazzNew from "../assets/subcategory/RazzmatazzNew.png"
import VocaliciousNew from "../assets/subcategory/VocaliciousNew.png"
import BalladeersNew from "../assets/subcategory/BalladeersNew.png"
import PreludeNew from "../assets/subcategory/PreludeNew.png"
import VrindNew from "../assets/subcategory/VrindNew.png"
import EngiIdolNew from "../assets/subcategory/Engi-IdolNew.png"
import SubCategoryCard from '../components/SubCategoryCard'
import hero from "../assets/Doremipa-hero.png"

import sponsor1 from "../assets/sponsor-logo4.png";
import sponsor2 from "../assets/sponsor-logo5.png";
import sponsor3 from "../assets/sponsor3.png";
import sponsor4 from "../assets/sponsor2.png";
import sponsor5 from "../assets/sponsor1.png";

const Doremipa = () => {
  return (
    <div className='Doremipa'>
      <style>{`
        .current-sponsors {
           display: flex;
           justify-content: space-evenly;
           align-items: center;
           flex-wrap: wrap;
           gap: 10px; /* Space between the circles */
           margin-top: 30px;
        }

        .current-sponsor {
           /* Make them Perfect Circles */
           width: 180px;
           height: 180px;
           border-radius: 50%;
           
           /* Styling the content inside */
           background-color: white; /* Clean background for logos */
           object-fit: contain;     /* Ensures rectangular logos don't stretch */
           padding: 2px;           /* Breathing room for the logo */
           box-shadow: 0 4px 10px rgba(0,0,0,0.2); /* Optional: subtle depth */
           
           /* Smooth Animation (0.1s as requested) */
           transition: transform 0.15s ease-in-out;
           cursor: pointer;
        }

        .current-sponsor:hover {
           transform: scale(1.1); /* Scale up slightly */
        }
      `}</style>

      <div className="hero-doremipa">
        <img src={hero} alt="Doremipa Hero" />
        <div className="about-doremipa-sec">
          <div className="group">
            <div className="div">
              <div className="text-1">About Us</div>
              <p className="p">
  DoReMiPa includes six musical competitions that showcase a diverse array of musical styles, encompassing Indian, Western, and Instrumental genres and draws participation from all major colleges in the Delhi NCR as well as other parts of India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame">

        <div className="div-2">
          <div className="text-wrapper">No. of Participants</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">500+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Footfall</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">3000+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Prize Pool Worth</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">₹100k+</div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper">Participating Colleges</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">100+</div>
          </div>
        </div>

      </div>

      <h1 className="subCat">Sub-Categories</h1>

      <div className="subcategory">
        <SubCategoryCard alt="Vocalicious" src={VocaliciousNew} link={`https://forms.gle/eF7Gf4wqU9sCeW4m8`} />
        <SubCategoryCard alt="Razzmatazz" src={RazzmatazzNew} link={`https://forms.gle/4hvoqLFWQErPsKpA9`} />
        <SubCategoryCard alt="Balladeers" src={BalladeersNew} link={`https://forms.gle/gWGPehwgPeLjqRFc6`} />
        <SubCategoryCard alt="Prelude" src={PreludeNew} link={`https://forms.gle/thVDbpyKJYiRqPaDA`} />
        <SubCategoryCard alt="Vrind" src={VrindNew} link={`https://forms.gle/eqUnLq4JHJYceTbg8`} />
        <SubCategoryCard alt="Engi Idol" src={EngiIdolNew} link={`https://forms.gle/NfaS3U6viEuDfq5S9`} />
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
    </div>
  )
}

export default Doremipa