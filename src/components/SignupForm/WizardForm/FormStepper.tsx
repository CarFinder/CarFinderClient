import * as React from 'react';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import FolderShared from 'material-ui-icons/FolderShared';
import Email from 'material-ui-icons/Email';
import Security from 'material-ui-icons/Security';
import '../style.less';

export interface Props {
  page: number;
}

const FormStepper = (props: Props) => (
  <div className="stepper">
    <div className="stepper-row">
      <div className="stepper-step">
        <Tooltip id="tooltip-basic" title="Личная информация" placement="bottom">
          <Button fab color={props.page >= 1 ? 'primary' : 'default'} aria-label="personal">
            <FolderShared />
          </Button>
        </Tooltip>
      </div>
      <div className="stepper-step">
        <Tooltip id="tooltip-basic" title="Контактная информация" placement="bottom">
          <Button fab color={props.page >= 2 ? 'primary' : 'default'} aria-label="contact">
            <Email />
          </Button>
        </Tooltip>
      </div>
      <div className="stepper-step">
        <Tooltip id="tooltip-basic" title="Безопасность" placement="bottom">
          <Button fab color={props.page >= 3 ? 'primary' : 'default'} aria-label="security">
            <Security />
          </Button>
        </Tooltip>
      </div>
    </div>
  </div>
);

export default FormStepper;
