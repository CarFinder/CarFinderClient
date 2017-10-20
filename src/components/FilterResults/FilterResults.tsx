import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import * as actions from '../../redux/actions/filterResultsActions';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarAd from './CarAd/CarAd';
import Button from 'material-ui/Button';
import './style.less';

export interface Props {
  adsAreLoaded: boolean;
  filterResults: CarModel[];
  loading: boolean;
  carFilters: {
    currentFilter: any;
    sortingParams: any;
  };
  handleUpdateAds: (payload: any, sortingParams: any) => void;
  handleSetAdsAsLoaded: (payload: boolean) => void;
}

export interface State {
  items: any;
  skipped: number;
}

class FilterResults extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      skipped: 0,
      items: <Typography type="display1">Please choose filter options</Typography>
    };
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.filterResults) {
      console.log(this.props.filterResults);
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
        items: carAds.length ? (
          carAds
        ) : (
          <Typography type="display1">No ads to display, try another filter</Typography>
        ),
        skipped: this.state.skipped + carAds.length
      });
    }
  }

  public render() {
    return (
      <Grid container className="ads-container">
        {this.props.loading && <CircularProgress size={50} />}
        {!this.props.loading && (
          <div>
            {this.state.items}
            <Button
              onClick={() =>
                this.props.handleUpdateAds(
                  this.props.carFilters.currentFilter,
                  this.props.carFilters.sortingParams
                )}
            >
              Load More
            </Button>
          </div>
        )}
      </Grid>
    );
  }
}

export default FilterResults;
