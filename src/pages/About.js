import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import AboutUsCard from '../components/AboutUsCard';
import CouncilCard from '../components/CouncilCard';

import noel from "../assets/noel-about.png";
import noelmobile from "../assets/noel-about-mobile.png";

import duality from '../assets/acts/duality.png';
import acapella from '../assets/acts/acapella.png';
import choir from '../assets/acts/choir.png';
import dhoomketu from '../assets/acts/dhoomketu.png';

import pres_24 from '../assets/council/Shobhon.jpg';
import vp1_24 from '../assets/council/Manas.jpg';
import vp2_24 from '../assets/council/Apoorv.jpg';
import gs1_24 from '../assets/council/Akarshita.jpg';
import gs2_24 from '../assets/council/Tanmaya.jpg';
import gs3_24 from '../assets/council/Vedant.jpeg';
import treas_24 from '../assets/council/Rethvik.jpg';

import pres_23 from '../assets/council/AnubhavF-100.jpg';
import vp1_23 from '../assets/council/DakshF-100.jpg';
import gs1_23 from '../assets/council/AkkshittaF-100.jpg';
import gs2_23 from '../assets/council/JindalF-100.png';
import treas_23 from '../assets/council/RajatF-100.jpg';

const About = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const councilData = {
    '2024-25': {
      president: { name: 'Shobhon', img: pres_24 },
      vicePresident1: { name: 'Manas', img: vp1_24 },
      vicePresident2: { name: 'Apoorv', img: vp2_24 },
      genSec1: { name: 'Akarshita', img: gs1_24 },
      genSec2: { name: 'Tanmaya', img: gs2_24 },
      genSec3: { name: 'Vedant', img: gs3_24 },
      treasurer: { name: 'Rethvik', img: treas_24 }
    },
    '2023-24': {
      president: { name: 'Anubhav', img: pres_23 },
      vicePresident1: { name: 'Daksh', img: vp1_23 },
      genSec1: { name: 'Akkshita', img: gs1_23 },
      genSec2: { name: 'Ansh', img: gs2_23 },
      treasurer: { name: 'Rajat', img: treas_23 }
    }
  };

  const images = [duality, acapella, choir, dhoomketu];
  const currentCouncil = councilData[selectedYear];

  return (
    <div className='about'>
      <div style={{ paddingTop: '150px' }}>
        <Carousel images={images} acts={-1} />
      </div>

      <AboutUsCard image={noel} imagemobile={noelmobile} desc="Madhurima is a student-led society of Delhi Technological University that aims to promote and celebrate music among the student community. Madhurima provides a platform for talented musicians to showcase their skills and explore their passion for music."/>

      <div>
        <div className='council-text'>COUNCIL</div>
        <div className='year-wrapper'>
          <select 
            className='year'
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
          </select>
        </div>

        <div className="council-pos">PRESIDENT</div>
        <div className='card-wrapper'>
          <CouncilCard img={currentCouncil.president.img} name={currentCouncil.president.name} />
        </div>
        
        <div className='council-pos'>VICE-PRESIDENT</div>
        <div className='council-column-wrapper'>

        {currentCouncil.vicePresident1 && (
          <div className="council-column">
            <div>
              <CouncilCard img={currentCouncil.vicePresident1.img} name={currentCouncil.vicePresident1.name} />
            </div>
            
            {currentCouncil.vicePresident2 && (
              <div>
                <CouncilCard img={currentCouncil.vicePresident2.img} name={currentCouncil.vicePresident2.name} />
              </div>
            )}
          </div>
        )}
        </div>
        
        <div className='council-pos'>GENERAL SECRETARIES</div>
        <div className='council-column-wrapper'>
        <div className="council-column">
          <div>
            <CouncilCard img={currentCouncil.genSec1.img} name={currentCouncil.genSec1.name} />
          </div>
          
          <div>
            <CouncilCard img={currentCouncil.genSec2.img} name={currentCouncil.genSec2.name} />
          </div>
          {currentCouncil.genSec3 && (
            <div>
              <CouncilCard img={currentCouncil.genSec3.img} name={currentCouncil.genSec3.name} />
            </div>
          )}
        </div>

        </div>
       

        <div className="council-pos">TREASURER</div>
        <div className='card-wrapper'>
          <CouncilCard img={currentCouncil.treasurer.img} name={currentCouncil.treasurer.name} />
        </div>
      </div>
    </div>
  );
};

export default About;
