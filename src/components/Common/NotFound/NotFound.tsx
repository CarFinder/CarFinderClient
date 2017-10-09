import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import './style.less';

const NotFound = () => (
  <div className="not-found">
    <Grid container>
      <Grid item xs={12}>
        <Grid container align="center" direction="column" justify="center">
          <Card className="not-found-content">
            <CardContent>
              <Typography className="not-found-title" type="headline" component="h3">
                404 not found
              </Typography>
              <Typography type="body1" component="p" color="secondary">
                Sorry. We couldn't find that page.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/">
                <Button color="primary" dense>
                  Go to Home
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default NotFound;
