import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import * as actions from '../../redux/actions/filterResultsActions';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarAd from './CarAd/CarAd';
import './style.less';

export interface Props {
  filterResults: CarModel[];
  handleUpdateAds: () => void;
}

export interface State {
  allAdsAreLoaded: boolean;
  items: any;
}

class FilterResults extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      allAdsAreLoaded: false,
      items: <Typography type="display1">Please choose filter options</Typography>
    };
  }

  public populateAds = () => {
    const carAds: any[] = [];
    this.props.filterResults.forEach((value: CarModel, index: number) => {
      carAds.push(
        <Grid item className="ad" key={index}>
          <CarAd
            model={value.model}
            mark={value.mark}
            description={value.description}
            price={value.price}
            year={value.year}
            images={value.images}
            kms={value.kms}
          />
        </Grid>
      );
    });
    this.setState({
      items: carAds
    });
  };

  public loadFunc = () => {
    this.props.handleUpdateAds();
    this.populateAds();
  };

  public render() {
    return (
      <Grid container className="ads-container">
        <InfiniteScroll
          className="infinite-scroll-container"
          loadMore={this.loadFunc}
          hasMore={this.props.filterResults.length > 0 && !this.state.allAdsAreLoaded}
          loader={this.state.items.length > 1 ? <CircularProgress size={50} /> : <div />}
        >
          {this.state.items}
        </InfiniteScroll>
      </Grid>
    );
  }
}

export default FilterResults;
