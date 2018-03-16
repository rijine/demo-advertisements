import {
  createFeatureSelector,
  ActionReducerMap,
  createSelector
} from '@ngrx/store';

import * as adsReducer from './ad.reducer';

export interface AdvertisementModuleState {
  ads: adsReducer.State;
}

export const advertisementReducers: ActionReducerMap<
  AdvertisementModuleState
> = {
  ads: adsReducer.reducer
};

export const getAdvertisementStore = createFeatureSelector<
  AdvertisementModuleState
>('advertisements');


export * from './ad.reducer';
