import * as React from 'react';

import './style.less';

export interface Props {
  scrollStepInPx: number;
  delayInMs: number;
}

export interface State {
  intervalId: number;
}

class ScrollTopTop extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }

  public scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  public scrollToTop = () => {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  };

  public render() {
    return (
      <button className="button is-warning scroll" title="Back to Top" onClick={this.scrollToTop}>
        <i className="fa fa-arrow-up" aria-hidden="true" />
      </button>
    );
  }
}

export default ScrollTopTop;
