import * as React from 'react';
import './style.less';

const Technologies = (props: any) => {
  return (
    <section className="section section-technologies">
      <div className="container">
        <p className="title section-title">Technologies</p>
        <p className="subtitle section-title">
          We used the following technologies to provide the best user experience for you:
        </p>
        <div className="columns">
          <div className="column section-column">
            <figure className="image is-128x128">
              <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" />
            </figure>
            <p className="title is-4">React</p>
          </div>
          <div className="column section-column">
            <figure className="image is-128x128">
              <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" />
            </figure>
            <p className="title is-4">Redux</p>
          </div>
          <div className="column section-column">
            <figure className="image is-128x128">
              <img src="https://nodejs.org/static/images/logo-hexagon.png" />
            </figure>
            <p className="title is-4">Node.js</p>
          </div>
          <div className="column section-column">
            <figure className="image is-128x128">
              <img src="http://jgthms.com/web-design-in-4-minutes/bulma.png" />
            </figure>
            <p className="title is-4">Bulma CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
