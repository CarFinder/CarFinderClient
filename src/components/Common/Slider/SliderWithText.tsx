import React, { PureComponent } from 'react';
import Dots from './Dots';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SlideWithText from './SlideWithText';
import './style.less';

interface Props {
  previousSlide?: () => void;
  nextSlide?: () => void;
  dotClick?: (index: number) => void;
  preloadNextImage?: () => void;
  content: any[];
}

interface State {
  background: any[];
  current: any;
  ready: boolean;
}

export default class SliderWithText extends PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      background: [],
      current: null,
      ready: false
    };
  }

  public componentWillMount() {
    this.setState({ background: this.props.content, current: 0, ready: true });
  }

  public componentDidMount() {
    setTimeout(this.nextSlide, 2000);
  }

  public preloadNextImage = () => {
    const current = this.state.current;
    const background = this.state.background;

    if (current !== null && current < background.length - 1) {
      return (
        <div
          style={{
            display: 'none',
            height: '100%',
            backgroundImage: `url(${this.state.background[this.state.current + 1].images[0]})`
          }}
        />
      );
    } else {
      return null;
    }
  };

  public dotClick = (dotIndex: number) => {
    this.setState({ current: dotIndex });
  };

  public previousSlide = () => {
    const current = this.state.current;
    const imageArray = this.state.background.length - 1;

    if (current >= 1) {
      this.setState({ current: current - 1 });
    }

    if (current === 0) {
      this.setState({ current: imageArray });
    }
  };

  public nextSlide = () => {
    const current = this.state.current;
    const imageArray = this.state.background.length - 1;

    if (current >= 0 && current !== imageArray) {
      this.setState({ current: current + 1 });
    }
    if (current === imageArray) {
      this.setState({ current: 0 });
    }
    setTimeout(this.nextSlide, 2000);
  };

  public render() {
    return (
      <div className="slider-with-text">
        {this.state.ready ? (
          <SlideWithText background={this.state.background} current={this.state.current} />
        ) : null}
        <Dots
          numberOfDots={this.state.background.length}
          isCurrent={this.state.current}
          dotClick={this.dotClick}
        />
        {this.preloadNextImage()}
      </div>
    );
  }
}
