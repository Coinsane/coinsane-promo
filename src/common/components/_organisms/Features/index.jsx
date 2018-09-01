/**
 * @flow
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Feature from 'components/_molecules/Feature';

import { StyledFeatures, FeaturedIcon } from './style';

type Props = {
  list: [
    {
      id: number;
      title: string;
      description: string;
      icons: array;
    }
  ];
}

class Features extends Component<Props> {
  constructor(props) {
    super(props);
    const { id, icons, front } = props.list[0];
    const frontId = `${id}-front`;
    this.state = {
      activeFeature: id,
      mainImg: require(`static/images/feature-${id}.png`),
      mainImgSrc: this.getMainImgSet(id),
      frontImg: front ? require(`static/images/feature-${frontId}.png`) : null,
      frontImgSrc: front ? this.getMainImgSet(frontId) : null,
      icons,
    };
  }

  getMainImgSet = (id) => {
    const img2x = require(`static/images/feature-${id}@2x.png`);
    const img3x = require(`static/images/feature-${id}@3x.png`);
    return `${img2x} 2x, ${img3x} 3x`;
  };

  updateActiveFeature(item) {
    const { id, icons, front } = item;
    const frontId = `${id}-front`;
    this.setState({
      activeFeature: id,
      mainImg: require(`static/images/feature-${id}.png`),
      mainImgSrc: this.getMainImgSet(id),
      frontImg: front ? require(`static/images/feature-${frontId}.png`) : null,
      frontImgSrc: front ? this.getMainImgSet(frontId) : null,
      icons,
    });
  }

  render() {
    const { list } = this.props;
    const {
      icons,
      activeFeature,
      mainImg,
      mainImgSrc,
      frontImg,
      frontImgSrc,
    } = this.state;
    const length = parseInt(list.length / 2, 0);
    const list1 = list.slice(0, length);
    const list2 = list.slice(length);
    return (
      <StyledFeatures front={frontImg} backgroundImage={require('static/images/features-bg.svg')}>
        <div className="features-row">
          {list1.map(item => (
            <Feature
              isActive={item.id === activeFeature}
              key={item.id}
              onClick={() => this.updateActiveFeature(item)}
              {...item}
            />
          ))}
        </div>
        <div className="features-show">
          {
            icons.map(icon => (
              <FeaturedIcon key={icon.id} {...icon}>
                <img src={require(`static/images/${icon.src}`)} alt="" />
              </FeaturedIcon>
            ))
          }
          {
            frontImg && (
              <img
                className="feature-image-front"
                src={frontImg}
                srcSet={frontImgSrc}
                alt=""
              />
            )
          }
          <img
            className="feature-image"
            src={mainImg}
            srcSet={mainImgSrc}
            alt=""
          />
        </div>
        <div className="features-row">
          {list2.map(item => (
            <Feature
              isActive={item.id === activeFeature}
              key={item.id}
              onClick={() => this.updateActiveFeature(item)}
              {...item}
            />
          ))}
        </div>
      </StyledFeatures>
    );
  }
}

export default withRouter(Features);
