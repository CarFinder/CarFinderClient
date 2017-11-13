import classNames from 'classnames';
import * as React from 'react';
import Waypoint from 'react-waypoint';
import './animate.less';
import './style.less';

class Features extends React.PureComponent<any, any> {
  constructor() {
    super();
    this.state = {
      visibleIcon: false
    };
  }

  public render() {
    return (
      <section className="section section-features">
        <div className="container">
          <p className="title">Features</p>
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
                <p className="title is-4">Search for the best offers from top platforms</p>
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
                <p className="title is-4">Save your search filters</p>
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
                <p className="title is-4">Be the first to get new offers</p>
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

                <p className="title is-4">Find out how fast you can sell your car</p>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    );
  }
}

export default Features;
