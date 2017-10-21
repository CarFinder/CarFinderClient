import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

const NotFound = () => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-centered">
          <article className="message is-danger">
            <div className="message-header">
              <p>404 Not Found</p>
            </div>
            <div className="message-body">
              Sorry. We couldn't find that page.
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
