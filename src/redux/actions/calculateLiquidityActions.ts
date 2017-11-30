import * as interfaces from '../../interfaces';
import * as actionTypes from './actionTypes';

export interface CalculateLiquidity {
  type: actionTypes.CALCULATE_LIQUIDITY;
  payload: interfaces.LiquidityFilter;
}

export interface GetLiquidity {
  type: actionTypes.GET_LIQUIDITY;
  payload: number;
}

export type CalculateLiquidityActions = CalculateLiquidity | GetLiquidity;

export function сalculateLiquidity(payload: any): CalculateLiquidity {
  return {
    type: actionTypes.CALCULATE_LIQUIDITY,
    payload
  };
}

export function getLiquidity(payload: any): GetLiquidity {
  return {
    type: actionTypes.GET_LIQUIDITY,
    payload
  };
}
