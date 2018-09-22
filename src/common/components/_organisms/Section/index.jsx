/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import ScrollableAnchor from 'react-scrollable-anchor';

import { StyledSection } from './style';

type Props = {
  title: string,
  id: string;
  background: string,
  color: string,
  children: React$Node,
}

class Section extends Component<Props> {
  render() {
    const {
      id,
      title,
      background,
      color,
      children,
    } = this.props;
    return (
      <StyledSection background={background} color={color}>
        <ScrollableAnchor id={id}>
          <div>
            <Container className={background && 'section'}>
              {title && (
                <Header
                  className="section-h2"
                  as="h2"
                  content={title}
                  textAlign="center"
                />
              )}
              {children}
            </Container>
          </div>
        </ScrollableAnchor>
      </StyledSection>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Section));
