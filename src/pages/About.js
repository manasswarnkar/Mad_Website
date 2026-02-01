import React, { useState, useEffect, useRef } from 'react';
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

import pres_25 from '../assets/council/prats.jpg';
import vp1_25 from '../assets/council/ambar.jpg';
import vp2_25 from '../assets/council/prashast.JPG';
import gs1_25 from '../assets/council/tuyam.jpg';
import gs2_25 from '../assets/council/Moumita.jpg';
import treas_25 from '../assets/council/subhav.JPG';

import js1_25 from '../assets/council/samridh.jpeg';
import js2_25 from '../assets/council/hridika.jpeg';
import js3_25 from '../assets/council/sidharta.jpg';

const About = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const councilData = {
    '2025-26': {
      president: { name: 'Pratyaksha', img: pres_25 },
      vicePresident1: { name: 'Ambar', img: vp1_25 },
      vicePresident2: { name: 'Prashast', img: vp2_25 },
      genSec1: { name: 'Tuyam', img: gs1_25 },
      genSec2: { name: 'Moumita', img: gs2_25 },
      treasurer: { name: 'Subhav', img: treas_25 },
      jointSec1: { name: 'Samriddh', img: js1_25 },
      jointSec2: { name: 'Hridika', img: js2_25 },
      jointSec3: { name: 'Siddhartha', img: js3_25 },
    },
    '2024-25': {
      president: { name: 'Shobhon', img: pres_24 },
      vicePresident1: { name: 'Manas', img: vp1_24 },
      vicePresident2: { name: 'Apoorv', img: vp2_24 },
      genSec1: { name: 'Akarshita', img: gs1_24 },
      genSec2: { name: 'Tanmaya', img: gs2_24 },
      genSec3: { name: 'Vedant', img: gs3_24 },
      treasurer: { name: 'Rethvik', img: treas_24 }
    }
  };

  const images = [duality, acapella, choir, dhoomketu];
  const currentCouncil = councilData[selectedYear];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const styles = {
    dropdownWrapper: {
      position: 'relative',
      width: '200px',
      margin: '0 auto 40px auto', 
      fontFamily: 'inherit',
      zIndex: 0 
    },
    dropdownTrigger: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '30px',
      border: '2px solid #555',
      fontSize: '1.2rem',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      transition: 'border-color 0.3s'
    },
    dropdownMenu: {
      position: 'absolute',
      top: '110%',
      left: '0',
      width: '100%',
      backgroundColor: '#1a1a1a',
      borderRadius: '15px',
      border: '1px solid #444',
      overflow: 'hidden',
      display: dropdownOpen ? 'block' : 'none',
      boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
      zIndex: 101
    },
    dropdownItem: {
      padding: '12px 20px',
      cursor: 'pointer',
      color: '#ddd',
      fontSize: '1.1rem',
      transition: 'background 0.2s',
      textAlign: 'center'
    },
    arrow: {
      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      fontSize: '0.8em',
      marginLeft: '10px'
    },
    rowContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '40px',
      marginBottom: '40px'
    }
  };

  return (
    <div className='about'>
      <style>{`
        /* 1. Simple Card Hover (No Glow) */
        .hover-card {
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border-radius: 20px;
          display: inline-block;
          width: fit-content;
        }
        .hover-card:hover {
          transform: scale(1.05); /* Just a clean zoom */
          z-index: 10;
        }

        /* 2. Dropdown Hover Effects */
        .dropdown-trigger:hover {
          border-color: #888;
        }
        .dropdown-item:hover {
          background-color: #333;
          color: #fff;
        }
      `}</style>

      <div style={{ paddingTop: '150px' }}>
        <Carousel images={images} acts={-1} />
      </div>

      <AboutUsCard 
        image={noel} 
        imagemobile={noelmobile} 
        desc="Madhurima is a student-led society of Delhi Technological University that aims to promote and celebrate music among the student community. Madhurima provides a platform for talented musicians to showcase their skills and explore their passion for music."
      />

      <div>
        <div className='council-text'>COUNCIL</div>
        
        {/* CUSTOM DROPDOWN */}
        <div style={styles.dropdownWrapper} ref={dropdownRef}>
          <div 
            style={styles.dropdownTrigger} 
            className="dropdown-trigger"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedYear}
            <span style={styles.arrow}>▼</span>
          </div>

          <div style={styles.dropdownMenu}>
            {['2025-26', '2024-25'].map((year) => (
              <div 
                key={year}
                style={styles.dropdownItem}
                className="dropdown-item"
                onClick={() => {
                  setSelectedYear(year);
                  setDropdownOpen(false);
                }}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        <div className="council-pos">PRESIDENT</div>
        <div style={styles.rowContainer}>
          <div className="hover-card">
            <CouncilCard img={currentCouncil.president.img} name={currentCouncil.president.name} />
          </div>
        </div>
        
        <div className='council-pos'>VICE-PRESIDENTS</div>
        <div style={styles.rowContainer}>
          {currentCouncil.vicePresident1 && (
            <div className="hover-card">
              <CouncilCard img={currentCouncil.vicePresident1.img} name={currentCouncil.vicePresident1.name} />
            </div>
          )}
          {currentCouncil.vicePresident2 && (
            <div className="hover-card">
              <CouncilCard img={currentCouncil.vicePresident2.img} name={currentCouncil.vicePresident2.name} />
            </div>
          )}
        </div>
        
        <div className='council-pos'>GENERAL SECRETARIES</div>
        <div style={styles.rowContainer}>
          <div className="hover-card">
            <CouncilCard img={currentCouncil.genSec1.img} name={currentCouncil.genSec1.name} />
          </div>
          <div className="hover-card">
             <CouncilCard img={currentCouncil.genSec2.img} name={currentCouncil.genSec2.name} />
          </div>
          {currentCouncil.genSec3 && (
            <div className="hover-card">
              <CouncilCard img={currentCouncil.genSec3.img} name={currentCouncil.genSec3.name} />
            </div>
          )}
        </div>
        {currentCouncil.jointSec1 && (
          <>
            <div className="council-pos">JOINT SECRETARIES</div>
            <div style={styles.rowContainer}>
              <div className="hover-card">
                <CouncilCard img={currentCouncil.jointSec1.img} name={currentCouncil.jointSec1.name} />
              </div>
              <div className="hover-card">
                <CouncilCard img={currentCouncil.jointSec2.img} name={currentCouncil.jointSec2.name} />
              </div>
              <div className="hover-card">
                <CouncilCard img={currentCouncil.jointSec3.img} name={currentCouncil.jointSec3.name} />
              </div>
            </div>
          </>
        )}
          <div className="council-pos">TREASURER</div>
        <div style={styles.rowContainer}>
          <div className="hover-card">
            <CouncilCard img={currentCouncil.treasurer.img} name={currentCouncil.treasurer.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;