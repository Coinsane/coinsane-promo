/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Grid, List, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import { getEntitiesLinksState, isLoaded } from 'selectors';
import { GET_LINKS } from 'actions/links';
import LinkItem from './components/LinkItem';

type Props = {
  links: Object,
  getLinks: () => void,
  isLinksLoaded: boolean
}

class Links extends Component<Props> {
  componentDidMount() {
    const { isLinksLoaded, getLinks } = this.props;
    if (!isLinksLoaded) {
      getLinks();
    }
  }

  async asyncBootstrap() {
    const { isLinksLoaded, getLinks } = this.props;
    if (!isLinksLoaded) {
      await getLinks();
    }
    return true;
  }

  render() {
    const { links, isLinksLoaded } = this.props;
    return (
      <div>
        <Helmet>
          <title>Suicrux:Links</title>
        </Helmet>
        {!isLinksLoaded ? (
          <Loader active>Loading data...</Loader>
        ) : (
          <Grid stackable>
            <Grid.Column width={16}>
              <List relaxed divided animated>
                {_.map(links, (linkItem, i) => <LinkItem key={i} {...linkItem} />)}
              </List>
            </Grid.Column>
          </Grid>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const linksState = getEntitiesLinksState(state);
  const links = linksState.entities;
  const isLinksLoaded = isLoaded(linksState);
  return {
    links,
    isLinksLoaded,
  };
}

const mapDispatchToProps = dispatch => ({
  async getLinks() {
    return dispatch(GET_LINKS());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);
