import React, { Component } from 'react';
import { Icon, List, Grid } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" >
        <Grid centered stackable columns={3}>
          <Grid.Column textAlign="center" className="center-content-column">
            <b>PLATINUM</b>
          </Grid.Column>

          <Grid.Column textAlign="center" className="center-content-column">
            <Icon circular size="large" name="facebook square" />
            <Icon circular size="large" name="twitter square" />
            <Icon circular size="large" name="slack" />
            <Icon circular size="large" name="instagram" />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Grid columns={2} centered>
              <Grid.Row centered>
                <Grid.Column>
                  <List className="center-content-column">
                    <List.Item icon="marker" content="Elektravägen 29" />
                    <List.Item icon="mail" content={<a href="mailto:mail@mail.com">mail@mail.com</a>} />
                    <List.Item icon="phone" content="070-000 00 00" />
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </footer>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
