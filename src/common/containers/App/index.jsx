/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Headroom from 'react-headroom';
// Import main views
import TopMenu from 'components/TopMenu';
// Import actions
import { WINDOW_RESIZE } from 'actions/layout';
import { getLayoutMobileStatuses } from 'selectors';
import ReactGA from 'react-ga';
import { Dimmer } from 'semantic-ui-react';
// Import styled components
import { PageLayout } from './style';
// import _ from 'lodash'
// Scss is written as a case study and a proof of CSS support
import './App.scss';

type Props = {
  children: React$Node,
  location: any,
  history: any,
  handleWindowResize: Function,
  isMobile: boolean,
}

class App extends Component<Props> {
  componentDidMount() {
    if (process.env.SENTRY_PUBLIC_DSN) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.crossorigin = 'anonymous';
      script.async = true;
      script.onload = () => {
        Raven.config(process.env.SENTRY_PUBLIC_DSN)
          .install();
      };
      script.src = 'https://cdn.ravenjs.com/3.22.1/raven.min.js';
      document.body.appendChild(script);
    }

    if (process.env.GA_ID) {
      const { location: { search, pathname } } = this.props;
      ReactGA.initialize(process.env.GA_ID);
      ReactGA.pageview(pathname + search);
    }

    if (process.env.BROWSER) {
      const { handleWindowResize } = this.props;
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
    }
  }

  // componentWillReceiveProps ({location: nextLocation}) {
  //   const {location} = this.props
  //   if (process.env.GA_ID && !_.isEqual(nextLocation, location)) {
  //     const {search, pathname} = nextLocation
  //     ReactGA.pageview(pathname + search)
  //   }
  // }

  // componentWillMount () {
  //   if (process.env.BROWSER) {
  //     const {handleWindowResize} = this.props
  //     handleWindowResize()
  //     window.addEventListener('resize', handleWindowResize)
  //   }
  // }

  render() {
    const { children, isMobile } = this.props;
    const dimmerProps = {
      active: isMobile,
      page: true,
    };

    return (
      <PageLayout>
        <Dimmer id="page-dimmer" key={1} {...dimmerProps} />
        <Headroom style={{ zIndex: 2 }} className="headroom-menu">
          <TopMenu />
        </Headroom>
        <div className="main-layout">
          <main className="main-content">
            {children}
          </main>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state) => {
  const { isMobile } = getLayoutMobileStatuses(state);

  return {
    isMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  let resizer;
  return {
    handleWindowResize() {
      clearTimeout(resizer);
      const { innerWidth } = window;
      resizer = setTimeout(() => dispatch(WINDOW_RESIZE(innerWidth)), 85);
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
