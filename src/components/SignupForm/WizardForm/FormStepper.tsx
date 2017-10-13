import Email from 'material-ui-icons/Email';
import FolderShared from 'material-ui-icons/FolderShared';
import Security from 'material-ui-icons/Security';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import * as React from 'react';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import '../style.less';

export interface Props {
  page: number;
  language: string;
}

const FormStepper = (props: Props) => {
  const lang = props.language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  return (
    <div className="stepper">
      <div className="stepper-row">
        <div className="stepper-step">
          <Tooltip id="tooltip-basic" title={lang.signupForm.firstStepTooltip} placement="bottom">
            <Button fab color={props.page >= 1 ? 'primary' : 'default'} aria-label="personal">
              <FolderShared />
            </Button>
          </Tooltip>
        </div>
        <div className="stepper-step">
          <Tooltip id="tooltip-basic" title={lang.signupForm.secondStepTooltip} placement="bottom">
            <Button fab color={props.page >= 2 ? 'primary' : 'default'} aria-label="contact">
              <Email />
            </Button>
          </Tooltip>
        </div>
        <div className="stepper-step">
          <Tooltip id="tooltip-basic" title={lang.signupForm.thirdStepTooltip} placement="bottom">
            <Button fab color={props.page >= 3 ? 'primary' : 'default'} aria-label="security">
              <Security />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default FormStepper;
