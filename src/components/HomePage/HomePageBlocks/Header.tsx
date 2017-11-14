import * as React from 'react';
import { Link } from 'react-router-dom';
import * as interfaces from '../../../interfaces';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import Counter from '../Counter/Counter';
import './animate.less';
import './style.less';

interface Props {
  language: string;
  searchError?: any;
  stats: interfaces.ServiceStats;
}

const Header = (props: Props) => {
  const { language, searchError, stats } = props;
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <section className="hero is-success hero-image is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">CarFinder</p>
          <p className="subtitle">{lang.home.motto}</p>
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
};

export default Header;
