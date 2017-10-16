import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarAd from './CarAd/CarAd';
import './style.less';

export interface Props {
  filterResults: CarModel[];
}

export interface State {
  index: number;
}

class FilterResults extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      index: 20
    };
  }

  public loadFunc = () => {
    if (this.state.index) {
      this.setState({
        index: this.state.index + 20
      });
    }
  };

  public render() {
    const { filterResults } = this.props;
    const items: any[] = [];
    filterResults.forEach((value: CarModel, index: number) => {
      if (index < this.state.index) {
        items.push(
          <Grid item className="ad" key={index}>
            <CarAd
              model={value.model}
              mark={value.mark}
              description={value.description}
              price={value.price}
              year={value.year}
              images={value.images}
              mileFrom={value.mileFrom}
            />
          </Grid>
        );
      }
    });
    return (
      <Grid container className="ads-container">
        <InfiniteScroll
          className="infinite-scroll-container"
          loadMore={this.loadFunc}
          hasMore={true}
          loader={<CircularProgress size={50} />}
        >
          {items}
        </InfiniteScroll>
      </Grid>
    );
  }
}

export default FilterResults;
