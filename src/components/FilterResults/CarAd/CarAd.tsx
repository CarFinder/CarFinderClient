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
  handleShowAdPreview: (id: number) => void;
}

const CarAd = (props: Props) => {
  const { model, mark, description, price, year, images, kms, handleShowAdPreview } = props;
  return (
    // tslint:disable-next-line:jsx-no-bind
    <div className="media" onClick={handleShowAdPreview.bind(this)}>
      <figure className="media-left">
        <p className="ad-image">
          <img className="image is-128x128" src={images[0]} />
        </p>
      </figure>
      <figure className="media-content">
        <div className="content">
          <p className="ad-title">{mark + ' ' + model}</p>
          <p>{description}</p>
        </div>
      </figure>
      <figure className="media-right">
        <div className="media-info">
          <span className="has-text-warning">
            <strong className="ad-price">
              <i className="fa fa-usd" aria-hidden="true" />&nbsp;{price}
            </strong>
          </span>
          <span className="has-text-grey">
            <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;{year}
          </span>
          <span className="has-text-grey-light">
            <i className="fa fa-road" aria-hidden="true" />&nbsp;{kms !== 0 ? kms : 'New'}
          </span>
        </div>
      </figure>
    </div>
  );
};

export default CarAd;
