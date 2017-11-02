import classNames from 'classnames';
import * as React from 'react';
import Waypoint from 'react-waypoint';
import * as interfaces from '../../interfaces';
import * as actions from '../../redux/actions/filterResultsActions';
import { CarModel } from '../../redux/models/filterResultsModel';
import interfaceLanguage from '../../utils/interfaceLanguage';
import AdPreview from './AdPreview/AdPreview';
import CarAd from './CarAd/CarAd';
import './style.less';

interface SortingParams {
  limit: number;
  skip: number | null;
  sort: any;
}

export interface Props {
  adsAreLoaded: boolean;
  filterResults: CarModel[];
  loading: boolean;
  language: string;
  selectedAd: string;
  skip: number;
  items: CarModel[];
  carFilters: {
    currentFilter: interfaces.CarFilter;
    sortingParams: SortingParams;
  };
  handleSetCurrentFilter: (payload: interfaces.CarFilter, sortingParams: SortingParams) => void;
  handeSetSortingParams: (payload: SortingParams) => void;
  handleSetSkip: (skipAmount: number) => void;
  handleSetAds: (ads: CarModel[]) => void;
  handleShowAdPreview: (id: string) => void;
  handleCloseModal: () => void;
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
    selectedAd,
    handleCloseModal
  } = props;
  const { language } = props;
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
  const modal = classNames('modal', {
    'is-active': selectedAd !== ''
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
        <article className="box car-ad-box" key={value._id}>
          <CarAd
            model={value.model}
            mark={value.mark}
            description={value.description}
            price={value.price}
            year={value.year}
            images={value.images}
            kms={value.kms}
            showAdPreview={() => {
              handleShowAdPreview(value._id);
            }}
          />
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
          <div className={modal}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{lang.carFilterResults.previewTitle}</p>
                <button className="delete" aria-label="close" onClick={handleCloseModal} />
              </header>
              <section className="modal-card-body">
                {items.map((value: CarModel, index) => {
                  if (value._id === selectedAd) {
                    return (
                      <AdPreview
                        model={value.model}
                        mark={value.mark}
                        description={value.description}
                        price={value.price}
                        year={value.year}
                        images={value.images}
                        kms={value.kms}
                        sourceUrl={value.sourceUrl}
                        source={lang.carFilterResults.adSource}
                        key={'preview' + index}
                      />
                    );
                  }
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterResults;
