import React from 'react';
import { 
  westernSolos, 
  indianSolos, 
  instrumental, 
  band, 
  group, 
  beatbox, 
  Instrumental_Duet, 
  Western_Duet 
} from '../utils/data';

const Accolades = () => {
  
  const GridCard = ({ image, name, tag, wins }) => (
    <div className="grid-card">
      <div className="image-container">
        <img src={image} alt={name} className="card-bg" />
        
        <div className="card-wins-overlay">
          <div className="wins-content">
            <p className="wins-title">ACHIEVEMENTS</p>
            {wins && wins.map((win, i) => (
              <p key={i} className="win-item">{win}</p> 
            ))}
          </div>
        </div>
      </div>

      <div className="card-info-below">
        <h3 className="card-name">{name}</h3>
        {tag && <span className="card-tag">{tag}</span>}
      </div>
    </div>
  );

  return (
    <div className='accolades'>
      
      <style>{`
        .accolades {
          padding-bottom: 60px;
          background-color: #121212;
        }

        .heading-cardsec {
          text-align: center;
          font-size: 1.4rem;
          color: #f1f1f1;
          margin: 60px 0 30px 0;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 50px 30px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .grid-card {
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .grid-card:hover {
          transform: scale(1.02);
          z-index: 10;
        }

        .image-container {
          position: relative;
          height: 380px; 
          border-radius: 12px;
          overflow: hidden; 
          background-color: #000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.6);
          
          border: 5px solid #fff; 
          transition: border-color 0.3s ease;
        }

        .grid-card:hover .image-container {
          border-color: transparent;
        }

        .card-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          /* Default scale */
          transform: scale(1); 
          transition: filter 0.3s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .grid-card:hover .card-bg {
          filter: brightness(15%);
          transform: scale(1.06); /* Zooms past the baked-in white edges */
        }

        .card-wins-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 50px;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
        }

        .grid-card:hover .card-wins-overlay {
          opacity: 1;
        }

        .wins-content {
          width: 90%; 
        }

        .wins-title {
          color: #aaa; 
          font-size: 0.75rem;
          letter-spacing: 2px;
          margin-bottom: 15px;
          font-weight: 600;
          text-transform: uppercase;
          border-bottom: 1px solid #444;
          padding-bottom: 8px;
          display: inline-block;
        }

        .win-item {
          color: #fff;
          font-size: 0.9rem;
          margin: 6px 0;
          line-height: 1.4;
          font-weight: 400;
          font-family: sans-serif;
        }

        /* 6. Name Section */
        .card-info-below {
          margin-top: 15px;
          text-align: center;
          backface-visibility: hidden; 
        }

        .card-name {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .card-tag {
          color: #888;
          font-size: 0.85rem;
          display: block;
          font-weight: 400;
        }
      `}</style>

      <p className='acc-heading'>ACCOLADES</p>

      <div className='card-section'>
        <p className='heading-cardsec'>Western Solos 2025-26</p>
        <div className='cards-grid'>
          {westernSolos.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Indian Solos 2025-26</p>
        <div className='cards-grid'>
          {indianSolos.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Instrumental Solos 2025-26</p>
        <div className='cards-grid'>
          {instrumental.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Beatbox Wins 2025-26</p>
        <div className='cards-grid'>
          {beatbox.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Duet Wins 2025-26</p>
        <div className='cards-grid'>
          {[...Western_Duet, ...Instrumental_Duet].map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Band Wins 2025-26</p>
        <div className='cards-grid'>
          {band.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

      <div className='card-section'>
        <p className='heading-cardsec'>Acapella & Choir Wins 2025-26</p>
        <div className='cards-grid'>
          {group.map((person, index) => <GridCard key={index} {...person} />)}
        </div>
      </div>

    </div>
  )
}

export default Accolades;