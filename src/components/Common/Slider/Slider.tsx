import React, { PureComponent } from 'react';
import Dots from './Dots';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide from './Slide';
import './style.less';

interface Props {
  previousSlide?: () => void;
  nextSlide?: () => void;
  dotClick?: (index: number) => void;
  preloadNextImage?: () => void;
  images: string[];
  source: string;
}

interface State {
  background: any[];
  current: any;
  ready: boolean;
}

export default class Slider extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      background: [],
      current: undefined,
      ready: false
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.preloadNextImage = this.preloadNextImage.bind(this);
  }

  public componentWillMount() {
    this.setState({ background: this.props.images, current: 0, ready: true });
  }

  public preloadNextImage() {
    const current = this.state.current;
    const background = this.state.background;

    if (current !== undefined && current < background.length - 1) {
      return (
        <div
          style={{
            display: 'none',
            height: '100%',
            backgroundImage: `url(${this.state.background[this.state.current + 1]})`
          }}
        />
      );
    } else {
      return null;
    }
  }

  public dotClick(dotIndex: number) {
    this.setState({ current: dotIndex });
  }

  public previousSlide() {
    const current = this.state.current;
    const imageArray = this.state.background.length - 1;

    if (current >= 1) {
      this.setState({ current: current - 1 });
    }

    if (current === 0) {
      this.setState({ current: imageArray });
    }
  }

  public nextSlide() {
    const current = this.state.current;
    const imageArray = this.state.background.length - 1;

    if (current >= 0 && current !== imageArray) {
      this.setState({ current: current + 1 });
    }
    if (current === imageArray) {
      this.setState({ current: 0 });
    }
  }

  public render() {
    return (
      <div className="slider">
        {this.state.ready ? (
          <Slide
            background={this.state.background}
            current={this.state.current}
            source={this.props.source}
          />
        ) : null}
        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />
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
