import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import './style.less';

export interface Props {
  model: string;
  mark: string;
  description: string;
  price: number;
  year: number;
  images: string[];
  kms: number;
}

const CarAd = (props: Props) => {
  const { model, mark, description, price, year, images, kms } = props;
  return (
    <Paper className="car-ad-container">
      <Grid item className="car-info">
        <Grid item className="car-ad-image">
          <img src={images[0]} />
        </Grid>
        <Grid item className="car-ad-description">
          <Typography type="display1">{mark + ' ' + model}</Typography>
          <Typography type="body1" gutterBottom>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className="car-info">
        <Grid item className="car-ad-year">
          <Typography type="headline">{year}</Typography>
        </Grid>
        <Grid item className="car-ad-price">
          <Typography type="headline">{price}</Typography>
          <Typography type="headline">{kms}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarAd;
