import * as React from 'react';
import { Link } from 'react-router-dom';
import { CarModel } from '../../../redux/models/filterResultsModel';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import CarAd from '../../FilterResults/CarAd/CarAd';
import './style.less';

export interface Props {
  language: string;
  name: string;
  id: string;
  ads: CarModel[];
  handleRemoveFilter: (id: string) => void;
}

const SavedSearchResult = (props: Props) => {
  const { name, ads, id, handleRemoveFilter, language } = props;
  const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;

  const renderItems = (
    <div>
      {ads.map((value: CarModel) => (
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
      ))}
      {ads.length === 0 && lang.savedSearch.noAdsToDisplay}
    </div>
  );

  return (
    <div className="saved-search-results">
      <div className="saved-search-name">
        <Link to="">
          {lang.savedSearch.savedSearchResults}&nbsp;{name}
        </Link>&nbsp;
        <i
          className="fa fa-trash delete-filter"
          aria-hidden="true"
          onClick={() => handleRemoveFilter(id)}
        />
      </div>
      {renderItems}
      <hr />
    </div>
  );
};

export default SavedSearchResult;
