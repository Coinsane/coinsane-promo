/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import { withRouter } from 'react-router';

import Feature from 'components/_molecules/Feature';

import { StyledFeatures } from './style';

type Props = {
  list: array,
}

class Features extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: props.list[0].photo,
      activeFeature: props.list[0].id,
    };
    this.updateActiveFeature = this.updateActiveFeature.bind(this);
  }

  updateActiveFeature(id, photo) {
    this.setState({
      activeFeature: id,
      mainImg: require(`static/images/feature-${id}.png`),
    });
  }

  render() {
    const { list } = this.props;
    const length = parseInt(list.length / 2);
    const list1 = list.slice(0, length);
    const list2 = list.slice(length);
    console.log('Первый', list);
    console.log('Второй', list1);
    return (
      <StyledFeatures backgroundImage={require('static/images/features-bg.svg')}>
        <div className="features-row">
          {list1.map((item) => (
            <Feature
              isActive={item.id === this.state.activeFeature}
              key={item.id}
              onClick={() => this.updateActiveFeature(item.id, item.photo)}
              {...item}
            />
          ))}
        </div>
        <div className="features-show">
          <img
            className="feature-icon-1"
            src={require('static/images/coins/btc.svg')}
          />
          <img
            className="feature-icon-2"
            src={require('static/images/coins/eth.svg')}
          />
          <img
            className="feature-icon-3"
            src={require('static/images/chart-line.svg')}
          />
          <img
            className="feature-icon-4"
            src={require('static/images/coins/xmr.svg')}
          />
          <Image
            className="feature-image"
            src={this.state.mainImg}
            // srcSet={require('static/images/feature-1@2x.png')}
          />
        </div>
        <div className="features-row">
          {list2.map((item) => (
            <Feature
              isActive={item.id === this.state.activeFeature}
              key={item.id}
              onClick={() => this.updateActiveFeature(item.id, item.photo)}
              {...item}
            />
          ))}
        </div>
      </StyledFeatures>
    );
  }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Features));
