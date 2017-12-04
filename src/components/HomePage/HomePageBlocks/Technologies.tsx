import classNames from 'classnames';
import * as React from 'react';
import Waypoint from 'react-waypoint';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './animate.less';
import './style.less';

interface Props {
  language: string;
}

class Technologies extends React.PureComponent<any, any> {
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
      <section className="section section-technologies">
        <div className="container">
          <p className="title section-title">{lang.home.technologies}</p>
          <p className="subtitle section-title">{lang.home.technologiesSubtitle}</p>
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
              <div
                className={classNames('column section-image section-column', {
                  'visible-1': this.state.visibleIcon
                })}
              >
                <figure className="image is-128x128">
                  <a href="https://reactjs.org/">
                    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" />
                  </a>
                </figure>
                <a href="https://reactjs.org/">
                  <p className="title is-4">React</p>
                </a>
              </div>
              <div
                className={classNames('column section-image section-column', {
                  'visible-2': this.state.visibleIcon
                })}
              >
                <figure className="image is-128x128">
                  <a href="https://redux.js.org/">
                    <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" />
                  </a>
                </figure>
                <a href="https://redux.js.org/">
                  <p className="title is-4">Redux</p>
                </a>
              </div>
              <div
                className={classNames('column section-image section-column', {
                  'visible-3': this.state.visibleIcon
                })}
              >
                <figure className="image is-128x128">
                  <a href="https://nodejs.org/">
                    <img src="https://nodejs.org/static/images/logo-hexagon.png" />
                  </a>
                </figure>
                <a href="https://nodejs.org/">
                  <p className="title is-4">Node.js</p>
                </a>
              </div>
              <div
                className={classNames('column section-image section-column', {
                  'visible-4': this.state.visibleIcon
                })}
              >
                <figure className="image is-128x128">
                  <a href="https://bulma.io/">
                    <img src="http://jgthms.com/web-design-in-4-minutes/bulma.png" />
                  </a>
                </figure>
                <a href="https://bulma.io/">
                  <p className="title is-4">Bulma CSS</p>
                </a>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    );
  }
}

export default Technologies;
