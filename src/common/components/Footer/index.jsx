/**
 * @flow
 */
import React from 'react';
import {
  Container, Grid, Header, Icon,
} from 'semantic-ui-react';
import { StyledFooter } from './style';

const Footer = () => (
  <StyledFooter>
    <Container>
      <Grid relaxed>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={3}>
            <Header as="h3" inverted>Company</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3" inverted>Support</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3" inverted>Media Social</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3" inverted>Address</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h3" inverted>
              <Header.Content>
                  Copyright Coinsane © 2018
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
