import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

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

export class DoctorsDetails extends Component {
  // eslint-disable-next-line react/sort-comp
  Initialstate = {
    limit: 15,
    offset: 0,
    radius: 100,
    activePage: 1,
    hasNextPage: false
  };

  state = {
    searchValue: 'my-current-location',
    limit: 15,
    offset: 0,
    radius: 100,
    activePage: 1,
    doctorsDetails: {},
    hasNextPage: false
  };

  componentDidMount () {
    const { searchValue, limit, offset, radius } = this.state;
    this.props.getDoctors(searchValue, limit, offset, radius);
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return prevState.offset + prevState.limit < nextProps.doctorsDetails.total ?
      { doctorsDetails: nextProps.doctorsDetails, hasNextPage: true } :
      { doctorsDetails: nextProps.doctorsDetails, hasNextPage: false };
  }

  handlePageChange = value => () => {
    let { offset, limit, radius, searchValue, activePage } = this.state;
    this.props.getDoctors(searchValue, limit, offset, radius);
    return value ?
      this.setState({ offset: offset + limit, activePage: ++activePage }) :
      this.setState({ offset: offset - limit, activePage: --activePage });
  };

  onDoctorChange = event => this.setState({ searchValue: event.target.value });

  onDoctorClick = event => {
    event.preventDefault();
    const { searchValue } = this.state;
    const { offset, limit, radius } = this.Initialstate;
    return searchValue ?
      (this.setState(prevState => ({ ...prevState, ...this.Initialstate })),
      this.props.getDoctors(searchValue, limit, offset, radius)) :
      toastr.error('Type location name');
  };

  onKeyPress = event => {
    return event.key === 'Enter' && this.onDoctorClick(event);
  };

  render () {
    const { doctorsDetails, hasNextPage } = this.state;
    return (
      <DoctorsDetailsWrapper>
        <DoctorsSearch
          onDoctorChange={this.onDoctorChange}
          onDoctorClick={this.onDoctorClick}
          onKeyPress={this.onKeyPress}
        />
        {doctorsDetails.data && doctorsDetails.data.length ? (
          <DoctoctsList
            doctorsDetails={doctorsDetails}
            handlePageChange={this.handlePageChange}
            activePage={this.state.activePage}
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
  }
}
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
