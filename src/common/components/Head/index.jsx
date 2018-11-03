/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import TopMenu from 'components/TopMenu';
import { StyledHeader } from './style';

class Head extends Component {
  state = {};

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

const HomepageHeading = () => (
  <Container>
    <div className="flex">
      <div className="flex-item">
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
          href="https://play.google.com/store/apps/details?id=org.coinsane.v1"
          target="_blank"
        />
        <Header
          className="h1"
          as="h1"
          content="Money management in crypto"
          inverted
        />
        <Header
          className="h2"
          as="h2"
          content="Development of crypto accounting platform for assets management and payments. Online banking on blockchain."
          inverted
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

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Head));
