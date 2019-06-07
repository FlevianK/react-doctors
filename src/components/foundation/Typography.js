import styled from 'styled-components';

import { main } from './Colors';

export const Root = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${main};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: 500; //medium
  padding-right: 0 !important;
  line-height: ${({ theme }) => theme.lineHeight};
  font-size: ${({ theme }) => theme.fontSize};
`;

export const H1 = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  ${({ theme }) => theme.lg`
    font-size: 1.2rem;
    line-height: 1.5rem;
  `}
`;
