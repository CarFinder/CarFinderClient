import * as React from 'react';
import Dropzone from 'react-dropzone';
import { toBase64 } from '../../../utils/utils';
import './style.less';

export interface Props {
  changeAvatar: (avatar: any) => any;
  image: string;
}

export interface State {
  image: any;
  errorMessage: string;
}

export default class DropPhoto extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      image: null,
      errorMessage: ''
    };
  }

  public onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length) {
      this.props.changeAvatar(acceptedFiles[0]);
      this.setState({ image: acceptedFiles[0], errorMessage: '' });
    }
    if (rejectedFiles.length) {
      this.setState({ errorMessage: 'Unsupported type' });
    }
  };

  public render() {
    const image = this.state.image
      ? this.state.image.preview
      : this.props.image
        ? this.props.image
        : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
    return (
      <div className="dropzone">
        <Dropzone
          accept="image/jpeg, image/png"
          multiple={false}
          onDrop={this.onDrop}
          className="field"
        >
          <figure className="image">{<img src={image} />}</figure>
          {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
        </Dropzone>
      </div>
    );
  }
}
