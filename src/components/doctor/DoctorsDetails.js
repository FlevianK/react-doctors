import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import DoctoctsList from './DoctorsList';
import DoctorsSearch from './DoctorsSearch';
import { getDoctors } from '../../actions/doctorAction';
import { LoadingGif } from '../foundation/icons';
import { Store } from '../../store/Store';

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

const DoctorsDetails = () => {
  const { state, dispatch } = useContext(Store);
  const [limit, setLimit] = useState(15);
  const [offset, setOffest] = useState(0);
  const [radius, setRadius] = useState(100);
  const [activePage, setActivePage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [searchValue, setSearchValue] = useState('my-current-location');

  useEffect(() => {
    getDoctors(searchValue, limit, offset, radius, dispatch);
  });


  useEffect(() => {
    if (offset + limit < state.doctorsDetails.total) {
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }
  }, [limit, offset, state]);

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
      getDoctors(searchValue, limit, offset, radius, dispatch);
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
      {state.doctorsDetails.total > 0 ? (
        <DoctoctsList
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

export default DoctorsDetails;
