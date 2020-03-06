/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'gatsby';

import smallbioDesign from '../styles/modules/smallbio.module.scss';

// TODO: Responsive maken!

const Smallbio = () => {
  return (
    <div className={smallbioDesign.smallbioContainer}>
      <div className={smallbioDesign.smallbioWrapper}>
        <br />
        <hr className={smallbioDesign.thick} />

        <p className={smallbioDesign.smallbioText}>
          <b>
            <u>Gimmix</u>
          </b>{' '}
          is een jong modern webmediabedrijf, opgericht door{' '}
          <a
            href="https://www.linkedin.com/in/michaelfransman"
            rel="noopener noreferrer"
            target="_blank"
          >
            Michael Fransman
          </a>
          , die zich inzet en gespecialiseerd is in het uitdenken en ontwikkelen
          van <u>websites en webapplicaties</u>. Wij zorgen dat de ambities van
          de klant en het eindproduct tot één komen. Wij bouwen onze
          softwareproducten <u>op maatwerk</u> en zorgen dat de klant zich
          zoveel mogelijk kan relativeren met het eindproduct.
          <br />
          <br />
          <br />
          <b>
            <Link to="/about/">Meer over Gimmix .. </Link>
          </b>
        </p>

        <hr className={smallbioDesign.thin} />
      </div>
    </div>
  );
};

export default Smallbio;