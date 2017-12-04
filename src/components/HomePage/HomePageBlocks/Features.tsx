import classNames from 'classnames';
import * as React from 'react';
import Waypoint from 'react-waypoint';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './animate.less';
import './style.less';

interface Props {
  language: string;
}

class Features extends React.PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visibleIcon: false
    };
  }

  public render() {
    const { language } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <section className="section section-features">
        <div className="container">
          <p className="title">{lang.home.features}</p>
          <Waypoint
            onEnter={() =>
              this.setState({
                visibleIcon: true
              })
            }
            onLeave={() =>
              this.setState({
                visibleIcon: false
              })
            }
          >
            <div className="columns">
              <div className="column section-column">
                <span
                  className={classNames('icon section-icon is-large', {
                    'visible-1': this.state.visibleIcon
                  })}
                >
                  <span className="fa fa-3x">
                    <i className="fa fa fa-car" />
                  </span>
                </span>
                <p className="title is-4">{lang.home.featuresSearch}</p>
              </div>
              <div className="column section-column">
                <span
                  className={classNames('icon section-icon is-large', {
                    'visible-2': this.state.visibleIcon
                  })}
                >
                  <span className="fa fa-3x">
                    <i className="fa fa-floppy-o" />
                  </span>
                </span>
                <p className="title is-4">{lang.home.featuresFilter}</p>
              </div>
              <div className="column section-column">
                <span
                  className={classNames('icon section-icon is-large', {
                    'visible-3': this.state.visibleIcon
                  })}
                >
                  <span className="fa fa-3x">
                    <i className="fa fa-envelope-open-o" />
                  </span>
                </span>
                <p className="title is-4">{lang.home.featuresOffers}</p>
              </div>
              <div className="column section-column">
                <span
                  className={classNames('icon section-icon is-large', {
                    'visible-4': this.state.visibleIcon
                  })}
                >
                  <span className="fa fa-3x">
                    <i className="fa fa-line-chart" />
                  </span>
                </span>

                <p className="title is-4">{lang.home.featuresLiquid}</p>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    );
  }
}

export default Features;
