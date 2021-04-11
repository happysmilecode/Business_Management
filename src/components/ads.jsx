import React, { Component } from 'react';

import PropTypes from 'prop-types';

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { slot } = this.props;
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3158048130288702"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}

GoogleAds.propTypes = {
  slot: PropTypes.string.isRequired,
};

export default GoogleAds;
