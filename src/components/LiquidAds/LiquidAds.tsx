import * as React from 'react';
import * as interfaces from '../../interfaces';
import SliderWithText from '../Common/Slider/SliderWithText';

export interface Props {
  handleGetLiquidAds: () => void;
  liquidAds: interfaces.LiquidAds[];
}

class LiquidAds extends React.PureComponent<Props, {}> {

  public componentDidMount() {
    this.props.handleGetLiquidAds();
  }

  public render() {
    const { liquidAds } = this.props;
    const noDataPlaceholder = (
      <div className="box is-centered has-text-centered">
        Sorry, we don't have stats to display most liquid ads.
        Please, come back later.
      </div>
    );
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
            {
              liquidAds.length === 0 && noDataPlaceholder
            }
            {
              liquidAds.length !==0 && <SliderWithText content={liquidAds} />
            }
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default LiquidAds;
