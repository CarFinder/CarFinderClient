import classNames from 'classnames';
import * as React from 'react';
import Waypoint from 'react-waypoint';
import * as actions from '../../redux/actions/filterResultsActions';
import { CarModel } from '../../redux/models/filterResultsModel';
import interfaceLanguage from '../../utils/interfaceLanguage';
import CarAd from './CarAd/CarAd';
import './style.less';

export interface Props {
  adsAreLoaded: boolean;
  filterResults: CarModel[];
  loading: boolean;
  language: string;
  isPreviewOpen: boolean;
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
  handleShowAdPreview: (id: number) => void;
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
    handeSetSortingParams,
    handleShowAdPreview,
    isPreviewOpen
  } = props;
  const { language } = props;
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  const modal = classNames('modal', {
    'is-active': isPreviewOpen
  });
  function loadMoreItems() {
    const data = {
      ...carFilters.sortingParams,
      skip: skip + carFilters.sortingParams.limit
    };
    handeSetSortingParams(data);
    handleSetCurrentFilter(carFilters.currentFilter, data);
    handleSetSkip(skip + filterResults.length);
    handleSetAds(filterResults);
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
            handleShowAdPreview={handleShowAdPreview}
          />
          <div className={modal}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button className="delete" aria-label="close" />
              </header>
              <section className="modal-card-body" />
            </div>
          </div>
        </article>
      );
    });
  }

  function renderWaypoint() {
    if (filterResults.length !== 0 && !adsAreLoaded) {
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
                <div className="has-text-centered">{lang.carFilterResults.chooseFilters}</div>
              )}
            {items.length === 0 &&
              adsAreLoaded && (
                <div className="has-text-centered">{lang.carFilterResults.nothingFound}</div>
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
