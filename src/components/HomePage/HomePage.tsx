import Grid from 'material-ui/Grid';
import * as React from 'react';

class HomePage extends React.Component<object, object> {
  public render() {
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
