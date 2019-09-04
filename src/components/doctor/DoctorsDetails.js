import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DoctoctsList from './DoctorsList';
import DoctorsSearch from './DoctorsSearch';
import { getDoctors } from '../../actions/doctorAction';
import { LoadingGif } from '../foundation/icons';

const DoctorsDetailsWrapper = styled.div`
  margin-bottom: 0.3rem;
`;

const LoadingGifWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  flex-direction: column;
`;

const LoadingTextWrapper = styled.div`
  padding-top: 0.3rem;
`;

const DoctorsDetails = (props) => {
  const { getDoctors, doctorsDetails } = props;
  const [limit, setLimit] = useState(15);
  const [offset, setOffest] = useState(0);
  const [radius, setRadius] = useState(100);
  const [activePage, setActivePage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [searchValue, setSearchValue] = useState('my-current-location');

  useEffect(() => {
    getDoctors(searchValue, limit, offset, radius);
  });

  useEffect(() => {
    if (offset + limit < doctorsDetails.total) {
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }
  }, [doctorsDetails, limit, offset]);

  const handlePageChange = value => () => {
    getDoctors(searchValue, limit, offset, radius);
    if (value) {
      setOffest(offset + limit);
      setActivePage(activePage + 1);
    } else {
      setOffest(offset - limit);
      setActivePage(activePage - 1);
    }
  };

  const onDoctorClick = event => {
    event.preventDefault();
    if (searchValue) {
      setOffest(0);
      setLimit(15);
      setActivePage(1);
      setRadius(100);
      setHasNextPage(false);
      getDoctors(searchValue, limit, offset, radius);
    } else {
      setSearchValue('my-current-location');
    }
  };

  return (
    <DoctorsDetailsWrapper>
      <DoctorsSearch
        onDoctorChange={e => setSearchValue(e.target.value)}
        onDoctorClick={onDoctorClick}
        onKeyPress={e => e.key === 'Enter' && onDoctorClick(e)}
      />
      {doctorsDetails.data && doctorsDetails.data.length ? (
        <DoctoctsList
          doctorsDetails={doctorsDetails}
          handlePageChange={handlePageChange}
          activePage={activePage}
          hasNextPage={hasNextPage}
        />
      ) : (
        <LoadingGifWrapper>
          <LoadingGif />
          <LoadingTextWrapper>
              Loading Current location data
          </LoadingTextWrapper>
        </LoadingGifWrapper>
      )}
    </DoctorsDetailsWrapper>
  );
};

DoctorsDetails.propTypes = {
  doctorsDetails: PropTypes.object,
  getDoctors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  doctorsDetails: state.doctorsDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDoctors }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorsDetails);
