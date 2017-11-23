import { Stats } from '../models/statsModel';
import * as actionTypes from './actionTypes';

export interface SetStats {
  type: actionTypes.SET_STATS;
  payload: Stats;
}

export interface GetStats {
  type: actionTypes.GET_STATS;
}

export type GetStatsAction = SetStats | GetStats;

export function getStats(): GetStats {
  return {
    type: actionTypes.GET_STATS
  };
}

export function setStats(payload: Stats): SetStats {
  return {
    type: actionTypes.SET_STATS,
    payload
  };
}
