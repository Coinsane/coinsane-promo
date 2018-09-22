/**
 * @flow
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import { StyledDownloadSection } from './style';

DownloadFooter.propTypes = {
  image: PropTypes.string.isRequired,
  imageSet: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default function DownloadFooter({
  image, imageSet, title, description, background,
}) {
  return (
    <StyledDownloadSection background={background}>
      <Container>
        <div className="flex">
          <div className="flex-item">
            <Image
              className="iphone-download"
              src={image}
              srcSet={imageSet}
            />
          </div>
          <div className="flex-item">
            <Header className="download-h2" as="h2" content={title} />
            <p className="download-p">{description}</p>
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
          </div>
        </div>
      </Container>
    </StyledDownloadSection>
  );
}
