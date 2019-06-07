import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { accent, cardFill, mainFill } from '../Colors';

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 6.3rem;
  border: none;
  justify-content: center;
  border-radius: 0.1rem;
  outline: none;
  transition: background 0.8s;
  cursor: pointer;
  :hover {
    background: ${mainFill}
      radial-gradient(circle, transparent 1%, ${mainFill} 1%) center/15000%;
    stroke: ${cardFill};
  }
  &:active {
    background-color: ${accent};
    background-size: 100%;
    transition: background 0s;
    stroke: ${cardFill};
  }
`;

// eslint-disable-next-line react/prop-types
const IconButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default IconButton;
