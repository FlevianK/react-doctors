import React from 'react';
import styled from 'styled-components';

import HeaderBar from './HeaderBar';
import DoctorsDetails from '../doctor/DoctorsDetails';
import { Root } from '../foundation/Typography';

const AppWrapper = styled(Root)``;

const Dashboard = () => (
  <AppWrapper>
    <HeaderBar />
    <DoctorsDetails />
  </AppWrapper>
);

export default Dashboard;
