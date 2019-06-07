import { css } from 'styled-components';

const windowSizes = {
  md: 26,
  lg: 40
};

export default Object.keys(windowSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${windowSizes[label]}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
