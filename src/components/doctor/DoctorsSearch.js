import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from '../foundation/buttons/IconButton';
import { SearchIcon } from '../foundation/icons';
import { cardFill, mainFill } from '../foundation/Colors';

const InputField = styled.input`
  background-color: ${cardFill};
  border: none;
  border-bottom: 0.1rem solid ${mainFill};
  border-radius: 0;
  outline: none;
  width: 25rem;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  ${({ theme }) => theme.lg`
    width: 15rem;
  `}
  ${({ theme }) => theme.md`
    width: 100%;
  `}
`;

const DoctorsSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  ${({ theme }) => theme.md`
    flex-direction: column;
    & > div {
      margin: 0.3rem;
    }
  `}
`;

const IconButtonWrapper = styled.div`
  & > button {
    width: 2.2rem;
    ${({ theme }) => theme.md`
      background: ${mainFill};
      stroke: ${cardFill};
    `}
  }
  ${({ theme }) => theme.md`
      margin-top: 0.3rem;
  `}
`;

const DoctorsSearch = ({ onDoctorChange, onDoctorClick, onKeyPress }) => (
  <DoctorsSearchWrapper>
    <div>Patient Location:</div>
    <InputField
      type="search"
      placeholder="Name e.g New York"
      onChange={onDoctorChange}
      onKeyPress={onKeyPress}
      data-cy="search"
    />
    <IconButtonWrapper>
      <IconButton onClick={onDoctorClick}>
        <SearchIcon />
      </IconButton>
    </IconButtonWrapper>
  </DoctorsSearchWrapper>
);

DoctorsSearch.propTypes = {
  onDoctorChange: PropTypes.func.isRequired,
  onDoctorClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default DoctorsSearch;
