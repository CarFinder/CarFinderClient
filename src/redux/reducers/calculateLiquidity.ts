import { CALCULATE_LIQUIDITY, GET_LIQUIDITY } from '../actions/actionTypes';
import { CalculateLiquidityActions } from '../actions/calculateLiquidityActions';
import { InitialState } from '../models/calculateLiquidityModel';

const initialState: InitialState = {
  result: 0
};

export default function calculateLiquidityReducer(state: InitialState = initialState, action: any) {
  switch (action.type) {
    case CALCULATE_LIQUIDITY:
      return state;
    case GET_LIQUIDITY:
      return {
        result: action.payload
      };
    default:
      return state;
  }
}
