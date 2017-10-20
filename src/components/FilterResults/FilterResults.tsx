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
  public render() {
    const carAds: any[] = [];
    this.props.filterResults.forEach((value: CarModel) => {
      carAds.push(
        <Grid item className="ad" key={value._id}>
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
    return (
      <Grid container className="ads-container">
        {this.props.loading && (
          <div className="empty">
            <CircularProgress size={50} />
          </div>
        )}
        {this.props.filterResults.length === 0 && (
          <div className="empty">Please choose filter options</div>
        )}
        {!this.props.loading && (
          <div>
            {carAds}
            {this.props.filterResults.length > 0 && (
              <div className="empty">
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
          </div>
        )}
      </Grid>
    );
  }
}

export default FilterResults;
