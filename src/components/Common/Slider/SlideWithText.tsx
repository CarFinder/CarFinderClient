import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

interface PropTypes {
  background: any[];
  current: any;
}

const SlideWithText = (props: PropTypes) => {
  const currentAd: any = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${currentAd.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      borderRadius: '5px'
    }
  };
  return (
    <div className="columns full-height">
      <div className="column">
        <div className="slide-with-text" style={styles.imageBackground} />
      </div>

      <div className="column is-one-quarter">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">Mark</a>
                </p>
                <p className="control is-expanded">
                  <input type="text" className="input" value={currentAd.mark} readOnly />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">Model</a>
                </p>
                <p className="control is-expanded">
                  <input type="text" className="input" value={currentAd.model} readOnly />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">Body Type</a>
                </p>
                <p className="control is-expanded">
                  <input type="text" className="input" value={currentAd.body} readOnly />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">Median</a>
                </p>
                <p className="control is-expanded">
                  <input type="text" className="input" value={currentAd.median} readOnly />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <Link to={currentAd.url}>
            <button className="button is-warning">See advertisements</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideWithText;
