import React from 'react';
import { Link } from 'react-router-dom';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './style.less';

interface PropTypes {
  background: any[];
  current: any;
  language: string;
}

const SlideWithText = (props: PropTypes) => {
  const currentAd: any = props.background[props.current];

  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

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
                  <a className="button is-static">{lang.liquidAds.mark}</a>
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
                  <a className="button is-static">{lang.liquidAds.model}</a>
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
                  <a className="button is-static">{lang.liquidAds.body}</a>
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
                  <a className="button is-static">{lang.liquidAds.median}</a>
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
            <button className="button is-warning">{lang.liquidAds.seeAds}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideWithText;
