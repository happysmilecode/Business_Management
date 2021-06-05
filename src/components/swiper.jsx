/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/swipering.scss';

const Projects = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <StaticImage
            src="../images/projects/Eternitydrum-screen.png"
            alt=""
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
          />
          <div className="slider-info">
            <div className="beschrijving">
              <Link to="/work/#EP">
                <h5>Eternity Drum</h5>
              </Link>

              <a
                href="https://eternitydrum.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button type="button" className="project-link">
                  bekijk website
                </button>
              </a>

              <p className="informatie">
                Deze website is gebouwd in opdracht van Stichting Eternity
                Percussion uit Amsterdam.
              </p>
              <p className="geschreven">
                <mark className="technologien">Wordpress</mark>{' '}
                <mark className="technologien">ACF</mark>{' '}
                <mark className="technologien">Brizy</mark>
              </p>
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/projects/Blackharmony-screen.png"
            alt=""
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
          />
          <div className="slider-info">
            <div className="beschrijving">
              <Link to="/work/#BH">
                {' '}
                <h5>Black Harmony</h5>{' '}
              </Link>

              <a
                href="https://blackharmony.nl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button type="button" className="project-link">
                  bekijk website
                </button>
              </a>

              <p className="informatie">
                Deze website is gebouwd in opdracht van zanggroep Black Harmony
                uit Amsterdam.
              </p>
              <p className="geschreven">
                <mark className="technologien">Wordpress</mark>{' '}
                <mark className="technologien">ACF</mark>{' '}
                <mark className="technologien">Additional CSS</mark>{' '}
                <mark className="technologien">Elementor Pro</mark>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
