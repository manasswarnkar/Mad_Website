import React from 'react'
import Razzmatazz from "../assets/subcategory/Razzmatazz.png"
import Vocalicious from "../assets/subcategory/Vocalicious.png"
import Balladeers from "../assets/subcategory/Balladeers.png"
import Prelude from "../assets/subcategory/Prelude.png"
import Vrind from "../assets/subcategory/Vrind.png"
import EngiIdol from "../assets/subcategory/Engi-Idol.png"
import SubCategoryCard from '../components/SubCategoryCard'
import hero from "../assets/Doremipa-hero.png"

import sponsor1 from "../assets/sponsor-logo1.png";
import sponsor2 from "../assets/sponsor-logo2.png";
import sponsor3 from "../assets/sponsor-logo3.png";
import sponsor4 from "../assets/sponsor-logo4.png";
import sponsor5 from "../assets/sponsor-logo5.png";

const Doremipa = () => {
  return (
    <div className='Doremipa'>
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
        <SubCategoryCard alt="Vocalicious" src={Vocalicious} link={`https://forms.gle/koNkgiu6eMof3ZJW7`} />
        <SubCategoryCard alt="Razzmatazz" src={Razzmatazz} link={`https://forms.gle/dM6rv8p93Dxf34Qu7`} />
        <SubCategoryCard alt="Balladeers" src={Balladeers} link={`https://forms.gle/P6BL5or1WjiCGByq9`} />
        <SubCategoryCard alt="Prelude" src={Prelude} link={`https://forms.gle/J5Pn8VxCTavvCQY39`} />
        <SubCategoryCard alt="Vrind" src={Vrind} link={`https://forms.gle/mpMhjYa8kgFzLN4q7`} />
        <SubCategoryCard alt="Engi Idol" src={EngiIdol} link={`https://forms.gle/RBS7DQzYjhWZFr2j8`} />
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
