import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Service from '../components/service';
import Projects from '../components/slider';
import Smallbio from '../components/smallbio';
import Actual from '../components/actual';

import '../styles/index.scss';

// *GEFIXT TODO: pagina helemaal responsive maken

const IndexPage = () => (
  <Layout>
    <Hero />

    <ScrollAnimation animateIn="zoomIn" delay={50} duration={3} animateOnce>
      <div className="specvertical" />
    </ScrollAnimation>

    <br />

    <div id="biografiescroll" className="extrawhitespace" />

    <ScrollAnimation
      animateIn="fadeInRight"
      delay={250}
      offset={50}
      duration={2}
      animateOnce
    >
      <h3 className="hometitles">Biografie</h3>
    </ScrollAnimation>

    <br />

    <ScrollAnimation
      animateIn="fadeInLeft"
      delay={900}
      duration={2}
      animateOnce
    >
      <Smallbio />
    </ScrollAnimation>

    <div className="extrawhitespace" />

    <ScrollAnimation animateIn="zoomIn" delay={50} duration={3} animateOnce>
      <div className="vertical" />
    </ScrollAnimation>

    <div id="actualscroll" className="extrawhitespace" />

    <ScrollAnimation
      animateIn="fadeInLeft"
      delay={250}
      offset={50}
      duration={2}
      animateOnce
    >
      <h3 className="hometitles">Actueel</h3>
    </ScrollAnimation>

    <br />

    <ScrollAnimation
      animateIn="fadeInRight"
      delay={900}
      duration={2}
      animateOnce
    >
      <Actual />
    </ScrollAnimation>

    <div className="extrawhitespace" />

    <ScrollAnimation animateIn="zoomIn" delay={50} duration={3} animateOnce>
      <div className="vertical" />
    </ScrollAnimation>

    <div id="servicescroll" className="extrawhitespace" />

    <ScrollAnimation
      animateIn="fadeInRight"
      delay={250}
      offset={50}
      duration={2}
      animateOnce
    >
      <h3 className="hometitles">Services & Diensten</h3>
    </ScrollAnimation>

    <br />

    <ScrollAnimation animateIn="fadeIn" delay={900} duration={2} animateOnce>
      <Service />
    </ScrollAnimation>

    <div className="extrawhitespace" />

    <ScrollAnimation animateIn="zoomIn" delay={50} duration={3} animateOnce>
      <div className="vertical" />
    </ScrollAnimation>

    <div id="projectscroll" className="extrawhitespace" />

    <ScrollAnimation
      animateIn="fadeInDown"
      delay={250}
      offset={50}
      duration={2}
      animateOnce
    >
      <h3 className="hometitles"> Recente Projecten</h3>
    </ScrollAnimation>

    <br />

    <ScrollAnimation animateIn="fadeInUp" delay={900} duration={2} animateOnce>
      <Projects />
    </ScrollAnimation>

    <div className="whitespace" />
  </Layout>
);

export default IndexPage;

export const Head = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          favicon
          siteUrl
          tel
          author
          bizEmail
          image
        }
      }
    }
  `);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Menefex Webmediabedrijf',
    founder: {
      '@type': 'Person',
      name: site.siteMetadata.author,
    },
    image: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
    logo: `${site.siteMetadata.siteUrl}${site.siteMetadata.favicon}`,
    '@id': `${site.siteMetadata.siteUrl}/#localbusiness`,
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    telephone: site.siteMetadata.tel,
    email: site.siteMetadata.bizEmail,
    hasMap: 'https://g.page/MenefexWMB?share',
    areaServed: {
      '@type': 'geoShape',
      addressCountry: ['Netherlands', 'Belgium', 'Surinam'],
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kelbergen 192',
      addressLocality: 'Amsterdam',
      postalCode: '1104LJ',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.31049387419748',
      longitude: '4.9737379576208856',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.facebook.com/MenefexWMB',
      'https://www.twitter.com/MenefexWMB',
      'https://www.instagram.com/menefexwmb/',
      'https://www.linkedin.com/company/menefexwmb/',
      'https://github.com/mikeyfe6',
      'https://www.patreon.com/menefexWMB',
      'https://feeds.feedburner.com/MenefexWMB',
      'https://wa.me/31611054318',
      'https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=5a3ca09f8cba4300',
    ],
  };
  return (
    <SEO
      title="#1 Website Specialist"
      description="Website, webshop of webapplicatie laten maken? Al vanaf €295,- | Menefex Webmediabedrijf uit Amsterdam staat garant voor al uw webgerelateerde wensen en ambities."
      keywords="website, webapplicatie, webshop, wordpress, SEO, amsterdam, specialist, menefex, webmediabedrijf, modern, professioneel, ontwikkelen, bob, webbeheerder, webmaster, projecten, portfolio, services, diensten, biografie, web development, app development, jamstack, michael fransman, gatsby, laten bouwen"
      schemaMarkup={schema}
    />
  );
};
