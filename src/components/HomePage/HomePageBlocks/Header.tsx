import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../../interfaces';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import Counter from '../Counter/Counter';
import './animate.less';
import './style.less';

const srcLoaded = 'https://static.pexels.com/photos/57645/pexels-photo-57645.jpeg';
const srcPreview = 'https://i.imgur.com/GTgq1o3.jpg';

interface Props {
  language: string;
  searchError?: any;
  stats: interfaces.ServiceStats;
}

interface Header {
  backgroundImage: any;
}

class Header extends React.PureComponent<Props, any> {
  constructor() {
    super();
    this.backgroundImage = null;
  }

  public componentDidMount() {
    const loadedImage = new Image();
    loadedImage.src = srcLoaded;
    loadedImage.onload = () => {
      this.backgroundImage.setAttribute('style', `background-image: url('${srcLoaded}')`);
      this.backgroundImage.classList.add('hero-image-fade-in');
    };
  }
  public render() {
    const { language, searchError, stats } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <section className="hero hero-image is-large">
        <div
          className="hero-image-loaded"
          ref={imageLoadedElem => (this.backgroundImage = imageLoadedElem)}
        />
        <div className="hero-image-preload" style={{ backgroundImage: `url('${srcPreview}')` }} />
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="hero-title title">CarFinder</p>
            <p className="hero-subtitle subtitle">{lang.home.motto}</p>
            <Link to="/signup" className="button hero-button is-warning">
              {lang.home.getStarted}
            </Link>
            {!searchError && (
              <div className="container-stats">
                <div className="columns is-centered">
                  <div className="column">
                    <div className="icon section-stats is-large">
                      <span className="fa fa-3x">
                        <i className="fa fa fa-shopping-basket" />
                      </span>
                      <Counter to={stats.ads} delay={1} speed={180} digits={0} />
                      <span className="counter-text subtitle">{lang.home.ads}</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="icon section-stats is-large">
                      <span className="fa fa-3x">
                        <i className="fa fa fa-user" />
                      </span>
                      <Counter to={stats.users} delay={1} speed={180} digits={0} />
                      <span className="counter-text subtitle">{lang.home.users}</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="icon section-stats is-large">
                      <span className="fa fa-3x">
                        <i className="fa fa fa-truck" />
                      </span>
                      <Counter to={stats.models} delay={1} speed={180} digits={0} />
                      <span className="counter-text subtitle">{lang.home.models}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
