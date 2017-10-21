import * as React from 'react';
import Waypoint from 'react-waypoint';
import * as actions from '../../redux/actions/filterResultsActions';
import { CarModel } from '../../redux/models/filterResultsModel';
import CarAd from './CarAd/CarAd';
import './style.less';

export interface Props {
  adsAreLoaded: boolean;
  filterResults: CarModel[];
  loading: boolean;
  skip: number;
  items: CarModel[];
  carFilters: {
    currentFilter: any;
    sortingParams: any;
  };
  handleSetCurrentFilter: (payload: any, sortingParams: any) => void;
  handeSetSortingParams: (payload: any) => void;
  handleSetSkip: (skipAmount: number) => void;
  handleSetAds: (ads: CarModel[]) => void;
}

const FilterResults = (props: Props) => {
  const {
    filterResults,
    items,
    skip,
    loading,
    carFilters,
    adsAreLoaded,
    handleSetAds,
    handleSetCurrentFilter,
    handleSetSkip,
    handeSetSortingParams
  } = props;

  function loadMoreItems() {
    const carAds = items;
    const data = {
      ...carFilters.sortingParams,
      skip: skip + carFilters.sortingParams.limit
    };
    handeSetSortingParams(data);
    handleSetCurrentFilter(carFilters.currentFilter, data);
    filterResults.forEach((value: CarModel) => carAds.push(value));
    handleSetSkip(skip + carFilters.sortingParams.limit);
    handleSetAds(carAds);
  }

  function renderItems() {
    return items.map((value: CarModel) => {
      return (
        <article className="box" key={value._id}>
          <CarAd
            model={value.model}
            mark={value.mark}
            description={value.description}
            price={value.price}
            year={value.year}
            images={value.images}
            kms={value.kms}
          />
        </article>
      );
    });
  }

  function renderWaypoint() {
    if (filterResults && !adsAreLoaded) {
      return <Waypoint onEnter={loadMoreItems} />;
    }
  }

  return (
    <div className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-centered">
            {items.length === 0 &&
              !adsAreLoaded && (
                <div className="empty">Please choose filter options</div>
              )}
            {items.length === 0 &&
              adsAreLoaded && (
                <div className="empty">Search returned no results</div>
              )}
            {renderItems()}
            {!loading && renderWaypoint()}
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterResults;
