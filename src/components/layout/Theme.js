import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import mediaQuery from './MediaQuery';

const fontType = {
  fontFamily: 'AvenirNext',
  fontSize: '1rem',
  lineHeight: '1.2rem'
};

const theme = { ...fontType, ...mediaQuery };

const Theme = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.object.isRequired
};

export default Theme;
