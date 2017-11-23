import { GET_LIQUID_ADS, SET_LIQUID_ADS } from '../actions/actionTypes';
import { LiqiudAdsAction } from '../actions/liquidAdsActions';
import { InitialState } from '../models/liquidAdsModel';

const initialState: InitialState = {
  liquidAds: []
};

export default function liquidAdsReducer(
  state: InitialState = initialState,
  action: LiqiudAdsAction
): InitialState {
  switch (action.type) {
    case GET_LIQUID_ADS:
      return state;
    case SET_LIQUID_ADS:
      return {
        ...state,
        liquidAds: action.payload
      };
    default:
      return state;
  }
}
