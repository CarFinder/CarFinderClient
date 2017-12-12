import * as React from 'react';
import Dropzone from 'react-dropzone';
import interfaceLang from '../../../utils/interfaceLanguage';
import { toBase64 } from '../../../utils/utils';
import './style.less';

export interface Props {
  changeAvatar: (avatar: File) => void;
  image: string;
  interfaceLanguage: string;
}

export interface State {
  image: any;
  typeError: boolean;
}

export default class DropPhoto extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      image: null,
      typeError: false
    };
  }

  public onDrop = (acceptedFiles: File[], rejectedFiles: File[]) => {
    if (acceptedFiles.length) {
      this.props.changeAvatar(acceptedFiles[0]);
      this.setState({ image: acceptedFiles[0], typeError: false });
    }
    if (rejectedFiles.length) {
      this.setState({ typeError: true });
    }
  };

  public render() {
    const lang = this.props.interfaceLanguage === 'ru' ? interfaceLang.ru : interfaceLang.en;

    const image = this.state.image
      ? this.state.image.preview
      : this.props.image
        ? this.props.image
        : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
    return (
      <div>
        <div className="dropzone">
          <Dropzone
            accept="image/jpeg, image/png"
            maxSize={2097152}
            multiple={false}
            onDrop={this.onDrop}
            className="field"
          >
            <figure className="image">{<img src={image} />}</figure>
            {this.state.typeError && <p className="error">{lang.userProfile.typeError}</p>}
          </Dropzone>
        </div>
        {!this.props.image &&
          !this.state.image && (
            <p
              className="help has-text-grey-light has-text-centered"
              dangerouslySetInnerHTML={{
                __html: lang.userProfile.dndHint
              }}
            />
          )}
        {(this.state.image || this.props.image) && (
          <p
            className="help has-text-grey-light has-text-centered upload-help"
            dangerouslySetInnerHTML={{
              __html: lang.userProfile.dndUpdateHint
            }}
          />
        )}
      </div>
    );
  }
}
