import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import IconButton from '../foundation/buttons/IconButton';
import { ChevronIcon } from '../foundation/icons';
import { Root } from '../foundation/Typography';
import { outline, outlineLight, secondary, accent } from '../foundation/Colors';

const PracticehWrapper = styled.p`
  margin: 0.3rem 0rem 0rem 0rem;
  padding 0.3rem;
`;

const CustomTr = styled.tr`
  &:nth-child(even) {
    background-color: ${outlineLight};
  }
  &:hover {
    background-color: ${outline};
  }
`;

const ReactTableWrapper = styled.div`
  & > table > thead {
    padding-top: 3rem;
    padding-bottom: 30rem;
    text-align: left;
    background-color: ${outline};
    color: ${secondary};
    ${({ theme }) => theme.lg`
        display: none;
    `}
    & > tr {
      height: 2.5rem;
    }
  }
`;

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
`;

const TitleWrapper = styled.span`
  padding 0.3rem;
`;

const LabelWrapper = styled(Root)``;

const LabelPlaceholder = styled.div`
  width: 6.3rem;
`;
const NoDataDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  color: ${accent};
`;

class DoctorsList extends Component {
  renderTableData () {
    return this.props.doctorsDetails.data.map(
      ({ name, practices, specialties }, index) => {
        return (
          <CustomTr key={index}>
            <td>
              <PracticehWrapper>{name}</PracticehWrapper>
            </td>
            <td>
              {specialties &&
                specialties.map((speciality, index) => (
                  <PracticehWrapper key={index}>{speciality}</PracticehWrapper>
                ))}
            </td>
            <td>
              {practices &&
                practices.map(
                  (
                    { acceptsNewPatients, address, phones, medicalCenterName },
                    index
                  ) => (
                    <PracticehWrapper key={index}>
                      Medical Center: {medicalCenterName} <br />
                      Accepts new Patients:
                      {acceptsNewPatients} <br /> Address: {address} <br />
                      Phones: {phones}
                    </PracticehWrapper>
                  )
                )}
            </td>
          </CustomTr>
        );
      }
    );
  }

  render () {
    const {
      activePage,
      handlePageChange,
      hasNextPage,
      doctorsDetails
    } = this.props;
    return doctorsDetails.data[0].data ? (
      <NoDataDiv>{doctorsDetails.data[0].data}</NoDataDiv>
    ) : (
      <Fragment>
        <ReactTableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <TitleWrapper>Name</TitleWrapper>
                </Th>
                <Th>
                  <TitleWrapper>Specialties</TitleWrapper>
                </Th>
                <Th>
                  <TitleWrapper>Practices</TitleWrapper>
                </Th>
              </Tr>
            </Thead>
            <Tbody>{this.renderTableData()}</Tbody>
          </Table>
        </ReactTableWrapper>
        <IconButtonWrapper>
          {activePage > 1 ? (
            <IconButton onClick={handlePageChange()}>
              <ChevronIcon rotate={270} />
              <LabelWrapper>Back</LabelWrapper>
            </IconButton>
          ) : (
            <LabelPlaceholder />
          )}
          <div> Page {activePage} </div>
          {hasNextPage ? (
            <IconButton onClick={handlePageChange('next')}>
              <LabelWrapper>Forward</LabelWrapper>
              <ChevronIcon rotate={90} />
            </IconButton>
          ) : (
            <LabelPlaceholder />
          )}
        </IconButtonWrapper>
      </Fragment>
    );
  }
}

DoctorsList.propTypes = {
  activePage: PropTypes.number,
  hasNextPage: PropTypes.bool,
  doctorsDetails: PropTypes.object,
  handlePageChange: PropTypes.func
};

export default DoctorsList;
