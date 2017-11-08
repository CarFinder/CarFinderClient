import interfaces from '../../interfaces';
import actionTypes from './actionTypes';

export interface GetLiquidAds {
  type: actionTypes.GET_LIQUID_ADS;
}

export interface SetLiquidAds {
  type: actionTypes.SET_LIQUID_ADS;
  payload: interfaces.LiquidAds[];
}

export type LiqiudAdsAction = GetLiquidAds | SetLiquidAds;

export function getLiquidAds(): GetLiquidAds {
  return {
    type: actionTypes.GET_LIQUID_ADS
  };
}

export function setLiquidAds(payload: interfaces.LiquidAds[]): SetLiquidAds {
  return {
    type: actionTypes.SET_LIQUID_ADS,
    payload
  };
}
