import * as React from 'react';
import Grid from 'material-ui/Grid';

export interface Props {}

class HomePage extends React.Component<Props, object> {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <p>Home Page</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
