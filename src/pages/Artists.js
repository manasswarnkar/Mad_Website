import React from 'react';
import { artist } from '../utils/data';
import { Icon } from '@iconify/react'; // Import Iconify

const Artists = () => {
  return (
    <div className='artistPage' style={{ paddingTop: "150px" }}>
      <style>{`
        .icon-link {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          margin: 0 10px; /* Spacing between icons */
        }

        .icon-style {
          color: black; 
          width: 45px;
          height: 45px;
          border: 2px solid black; 
          border-radius: 50%;
          padding: 8px; 
          transition: all 0.3s ease-in-out;
        }

        .icon-link:hover .icon-style {
          transform: scale(1.15);
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <div>
        <p className='heading-artistPage'>Our Alumni</p>
      </div>

      {artist.map((artist, index) => (
          <div className="artist-card" key={index}>
            <div className="artist-sec1">
              <img 
                src={artist.image} 
                alt={artist.name} 
                style={{ width:'370px', height:'370px', borderRadius:"50%", objectFit:'cover' }} 
              />
            </div>
            <div className="artist-sec2">
              <div className="heading-artist">
                <p className="artist-name">{artist.name} | </p>
                <p className="artist-tag"> {artist.tag}</p>
              </div>
              <div>
                <p className="artist-desc">{artist.desc}</p>
              </div>
              <div className="artist-spotify">
                <iframe
                  title='spotify'
                  style={{ borderRadius: "12px" }}
                  src={artist.spotifyEmbed}
                  width="100%"
                  height="100vw"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="artist-links">
                {/* 1. Instagram */}
                <a href={artist.ig} target='_blank' rel='noreferrer' className="icon-link">
                  <Icon icon="mdi:instagram" className="icon-style" />
                </a>

                <a href={artist.yt} target='_blank' rel='noreferrer' className="icon-link">
                  <Icon icon="mdi:youtube" className="icon-style" />
                </a>

                <a href={artist.spotify} target='_blank' rel='noreferrer' className="icon-link">
                  <Icon icon="mdi:spotify" className="icon-style" />
                </a>
              </div>

            </div>
          </div>
      ))}
    </div>
  )
}

export default Artists;