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
  source: string;
  sourceUrl: string;
}

const AdPreview = (props: Props) => {
  const { model, mark, description, price, year, images, kms, source, sourceUrl } = props;
  return (
    <div>
      <div>
        <p className="preview-images">
          {images.map((image: string, index) => {
            return <img className="preview-image" src={image} key={'image' + index} />;
          })}
        </p>
      </div>
      <div className="preview-media">
        <div className="preview-info">
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
        <div className="content">
          <p className="ad-title">{mark + ' ' + model}</p>
          <p>{description}</p>
        </div>
        <div className="ad-link-container">
          <label htmlFor="source">{source}</label>
          <input
            className="has-icons-right input"
            value={sourceUrl}
            id="has-icons-right"
            onClick={(e: any) => e.target.select()}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AdPreview;
