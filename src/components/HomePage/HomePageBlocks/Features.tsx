import * as React from 'react';
import './style.less';

const Features = (props: any) => {
  return (
    <section className="section section-features">
      <div className="container">
        <p className="title">Features</p>
        <div className="columns">
          <div className="column section-column">
            <span className="icon section-icon is-large">
              <span className="fa fa-3x">
                <i className="fa fa fa-car" />
              </span>
            </span>
            <p className="title is-4">Search for the best offers from top platforms</p>
          </div>
          <div className="column section-column">
            <span className="icon section-icon is-large">
              <span className="fa fa-3x">
                <i className="fa fa-floppy-o" />
              </span>
            </span>
            <p className="title is-4">Save your search filters</p>
          </div>
          <div className="column section-column">
            <span className="icon section-icon is-large">
              <span className="fa fa-3x">
                <i className="fa fa-envelope-open-o" />
              </span>
            </span>
            <p className="title is-4">Be the first to get new offers</p>
          </div>
          <div className="column section-column">
            <span className="icon section-icon is-large">
              <span className="fa fa-3x">
                <i className="fa fa-line-chart" />
              </span>
            </span>
            <p className="title is-4">Find out how fast you can sell your car</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
