import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

const Header = (props: any) => {
  return (
    <section className="hero is-success hero-image is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">CarFinder</p>
          <p className="subtitle">If You Want To Get Ahead, Get A Car.</p>
          <Link to="/signup" className="button hero-button is-warning">
            Get Started
          </Link>
        </div>
        <div className="container container-stats has-text-centered">
          <div className="columns">
            <div className="column section-column">Ads</div>
            <div className="column section-column">Users</div>
            <div className="column section-column">Models</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
