import * as React from 'react';
declare var require: any;
import Slider from '../../Common/Slider/Slider';
// tslint:disable-next-line:no-var-requires
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

  const onCopyClick = () => {
    document.execCommand('copy', false);
  };

  return (
    <div>
      <div>
        <Slider images={images} />
      </div>
      <div className="preview-media">
        <div className="content">
          <p className="ad-title is-size-3">{mark + ' ' + model}</p>
          <p>{description}</p>
        </div>
        <div className="preview-info">
          <span className="has-text-warning">
            <strong className="ad-price">
              <i className="fa fa-tag" aria-hidden="true" />&nbsp;{price}
            </strong>
          </span>
          <span className="has-text-grey">
            <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;{year}
          </span>
          <span className="has-text-grey-light">
            <i className="fa fa-road" aria-hidden="true" />&nbsp;{kms !== 0 ? kms : 'New'}
          </span>
        </div>
      </div>
      <div className="ad-link-container">
        <label htmlFor="source">{source}</label>
        <div className="field has-addons">
          <input
            className="has-icons-right input"
            value={sourceUrl}
            id="source"
            onClick={(e: any) => e.target.select()}
            readOnly={true}
          />
          <p className="control">
            <a className="button">
              <i className="fa fa-clipboard" aria-hidden="true" onClick={onCopyClick} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdPreview;
