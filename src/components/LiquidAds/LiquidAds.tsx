import * as React from 'react';
import * as interfaces from '../../interfaces';
import interfaceLanguage from '../../utils/interfaceLanguage';
import SliderWithText from '../Common/Slider/SliderWithText';

export interface Props {
  handleGetLiquidAds: () => void;
  liquidAds: interfaces.LiquidAds[];
  language: string;
}

class LiquidAds extends React.PureComponent<Props, {}> {
  public componentDidMount() {
    this.props.handleGetLiquidAds();
  }

  public render() {
    const { liquidAds, language } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    const noDataPlaceholder = (
      <div className="box is-centered has-text-centered">{lang.liquidAds.noStatsAvailable}</div>
    );
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              {liquidAds.length === 0 && noDataPlaceholder}
              {liquidAds.length !== 0 && <SliderWithText language={language} content={liquidAds} />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LiquidAds;
