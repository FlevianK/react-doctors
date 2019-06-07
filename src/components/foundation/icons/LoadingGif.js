import React from 'react';
import PropTypes from 'prop-types';

const LoadingGif = ({ size = '70' }) => (
  <img
    width={size}
    height={size}
    className="irc_mi"
    src="https://i.stack.imgur.com/UUjhE.gif"
    onLoad="typeof google==='object'&amp;&amp;google.aft&amp;&amp;google.aft(this)"
    data-iml="1556811011905"
    alt="Image result for loading gif"
  />
);

LoadingGif.propTypes = {
  size: PropTypes.string
};

export default LoadingGif;
