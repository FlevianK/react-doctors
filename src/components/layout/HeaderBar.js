import React from 'react';
import styled from 'styled-components';

import { H1 } from '../foundation/Typography';
import { cardFill, mainFill } from '../foundation/Colors';

const HeaderBarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  background: ${mainFill};
  height: 5rem;
  align-items: center;
  ${({ theme }) => theme.lg`
		height: 3rem;
	`}
`;

const TitleWrapper = styled(H1)`
  color: ${cardFill};
`;

const HeaderBar = () => (
  <HeaderBarWrapper>
    <TitleWrapper>Find Your Closest Doctor</TitleWrapper>
  </HeaderBarWrapper>
);

export default HeaderBar;
