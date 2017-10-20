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
      <div className="car-info_1">
        <div className="car-ad-image">
          <img src={images[0]} />
        </div>
        <div className="car-ad-description">
          <Typography type="display1">{mark + ' ' + model}</Typography>
          <Typography type="body1" className="description-text">
            {description}
          </Typography>
        </div>
      </div>
      <div className="car-info_2">
        <div className="car-ad-year">
          <Typography type="headline">Год выпуска: {year}</Typography>
        </div>
        <div className="car-ad-price">
          <Typography type="headline">Цена: {price}$</Typography>
          <Typography type="headline">Пробег: {kms !== 0 ? kms : 'New'}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default CarAd;
