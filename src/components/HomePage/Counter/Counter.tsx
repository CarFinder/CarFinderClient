import React from 'react';

interface Props {
  to: number;
  speed: number;
  delay: number;
  digits: number;
}

interface State {
  counter: number;
}

interface Counter {
  loops: number;
  loopsCounter: number;
  increment: number;
  interval: number;
}

class Counter extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super();
    this.state = {
      counter: 0
    };
  }

  public componentDidMount() {
    this.start();
  }

  public componentWillReceiveProps(nextProps: any) {
    const { to } = this.props;

    if (nextProps.to !== to) {
      this.start(nextProps);
    }
  }

  public componentWillUnmount() {
    this.clear();
  }

  public start = (props = this.props) => {
    this.clear();
    this.setState(
      {
        counter: 0
      },
      () => {
        const { delay, speed, to } = this.props;
        const { counter } = this.state;
        this.loopsCounter = 0;
        this.loops = Math.ceil(speed / delay);
        this.increment = (to - counter) / this.loops;
        this.interval = setInterval(this.next, delay);
      }
    );
  };

  public next = () => {
    if (this.loopsCounter < this.loops) {
      this.loopsCounter++;
      this.setState(({ counter }) => ({
        counter: counter + this.increment
      }));
    } else {
      this.clear();
    }
  };

  public clear = () => {
    clearInterval(this.interval);
  };

  public render() {
    const { digits } = this.props;
    const { counter } = this.state;
    const value = counter.toFixed(digits);

    return <span className="counter-digits is-size-4">{value}</span>;
  }
}

export default Counter;
