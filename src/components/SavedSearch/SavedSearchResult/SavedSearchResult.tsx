import * as React from 'react';
import { Link } from 'react-router-dom';
import { CarModel } from '../../../redux/models/filterResultsModel';
import CarAd from '../../FilterResults/CarAd/CarAd';
import './style.less';

export interface Props {
  name: string;
  ads: CarModel[];
}

const SavedSearchResult = (props: Props) => {
  const { name, ads } = props;

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
    </div>
  );

  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-centered">
          <Link to="/">Сохраненные запросы по фильтру {name}</Link>
          {renderItems}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SavedSearchResult;
