import * as React from 'react';
import * as interfaces from '../../interfaces';
import SliderWithText from '../Common/Slider/SliderWithText';

export interface Props {
  handleGetLiquidAds: () => void;
  liquidAds: interfaces.LiquidAds[];
}

// TODO: remove mockdata
class LiquidAds extends React.PureComponent<Props, {}> {

  public componentDidMount() {
    // this.props.handleGetLiquidAds();
  }

  public render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-centered">
              <SliderWithText content={mockData} />
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default LiquidAds;

const mockData: interfaces.LiquidAds[] = [
  {
    _id: '1',
    mark: 'Audi',
    model: 'A6',
    median: 50,
    images: [
      'https://content.onliner.by/automarket/1589576/800x800/da5f57e0ea91524b6ba08008f6c2004f.jpeg'
    ]
  },
  {
    _id: '2',
    mark: 'BMW',
    model: 'X6',
    median: 100,
    images: [
      'https://content.onliner.by/automarket/1983797/800x800/23e49b984457cde728e2b55245083607.jpeg'
    ]
  },
  {
    _id: '3',
    mark: 'Ford',
    model: 'Mondeo',
    median: 40,
    images: [
      'https://content.onliner.by/automarket/1589576/800x800/a9a889e10cf7245e2c414955fc653382.jpeg'
    ]
  }
];
