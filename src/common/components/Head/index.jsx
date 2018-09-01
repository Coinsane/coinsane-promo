/**
 * @flow
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import TopMenu from 'components/TopMenu';
import { StyledHeader } from './style';

class Head extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <StyledHeader>
        <Image
          className="header-shape-4"
          src={require('static/images/header-shape-4.svg')}
        />
        <TopMenu inverted />
        <HomepageHeading />
        <Image
          className="header-shape-1"
          src={require('static/images/header-shape-1.svg')}
        />
        <Image
          className="header-shape-2"
          src={require('static/images/header-shape-2.svg')}
        />
        <Image
          className="header-shape-3"
          src={require('static/images/header-shape-3.svg')}
        />
      </StyledHeader>
    );
  }
}

const HomepageHeading = ({ mobile }) => (
  <Container>
    <div className="flex">
      <div className="flex-item">
        <Header
          className="h1"
          as="h1"
          content="Money management in crypto"
          inverted
        />
        <Header
          className="h2"
          as="h2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
          inverted
        />
        <Image
          className="store-button"
          src={require('static/images/appstore.svg')}
          alt="appstore"
          href="http://apple.com"
          target="_blank"
        />
        <Image
          className="store-button"
          src={require('static/images/googleplay.svg')}
          alt="googleplay"
          href="http://google.com"
          target="_blank"
        />
      </div>
      <div className="flex-item">
        <Image
          className="phone"
          src={require('static/images/iphone.png')}
          srcSet={require('static/images/iphone@2x.png')}
        />
      </div>
    </div>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Head));
