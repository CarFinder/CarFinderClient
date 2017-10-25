import * as React from 'react';
import Dropzone from 'react-dropzone';
import { toBase64 } from '../../../utils/utils';
import './style.less';

export interface Props {
  changeAvatar: (avatar: any) => any;
}

export interface State {
  file: any;
}

export default class DropPhoto extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  public onDrop = (files: any) => {
    this.props.changeAvatar(files[0]);
    this.setState({ file: files[0] });
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
            {this.state.file && <img src={this.state.file.preview} />}
          </figure>
        </Dropzone>
      </div>
    );
  }
}
