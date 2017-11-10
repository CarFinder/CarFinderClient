import classNames from 'classnames';
import * as React from 'react';
import './style.less';

const Footer = () => (
  <footer
    className={classNames('footer', {
      'dark-theme': window.location.href === 'http://localhost:3001/'
    })}
  >
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>CarFinder</strong> by&nbsp;
          <a href="https://github.com/CarFinder">CarFinder Inc.</a>&nbsp; The source code is
          licensed under&nbsp;
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
