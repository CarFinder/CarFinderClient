import * as React from 'react';
import Dropzone from 'react-dropzone';
import { toBase64 } from '../../../utils/utils';
import './style.less';

export interface Props {
  changeAvatar: (avatar: any) => any;
  image?: string;
}

export interface State {
  image: any;
}

export default class DropPhoto extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      image: null
    };
  }

  public onDrop = (files: any) => {
    this.props.changeAvatar(files[0]);
    this.setState({ image: files[0] });
  };

  public render() {
    return (
      <div className="dropzone">
        <Dropzone
          accept="image/jpeg, image/png"
          multiple={false}
          onDrop={this.onDrop}
          className="field"
          activeClassName="is-active"
          rejectClassName="is-reject"
        >
          <figure className="image">
            {<img src={this.state.image ? this.state.image.preview : this.props.image} />}
          </figure>
        </Dropzone>
      </div>
    );
  }
}
