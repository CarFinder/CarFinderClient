import React from 'react';
import { receiveImageFromAvby } from '../../../utils/utils';

interface PropTypes {
  background: any[];
  current: any;
  source: string;
}

interface State {
  image: any;
}

class Slide extends React.PureComponent<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      image: null
    };
  }

  public componentDidMount() {
    this.getImage(this.props);
  }

  public componentWillReceiveProps(nextProps: PropTypes) {
    this.getImage(nextProps);
  }

  public async getImage(props: PropTypes) {
    if (props.source === 'av.by') {
      const image = await receiveImageFromAvby(props.background[props.current], props.source);
      this.setState({
        image
      });
    } else {
      this.setState({
        image: props.background[props.current]
      });
    }
  }

  public render() {
    const styles = {
      imageBackground: {
        backgroundImage: `url(${this.state.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    };
    return <div className="slide" style={styles.imageBackground} />;
  }
}

export default Slide;
