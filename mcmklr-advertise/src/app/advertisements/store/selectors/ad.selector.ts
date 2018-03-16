import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getAdvertisementStore } from '../reducers';

import * as adsReducer from './../reducers/ad.reducer';

export const selectAdsState = createSelector(
  getAdvertisementStore,
  state => state.ads
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adsReducer.adapter.getSelectors(selectAdsState);

export const selectAdsPaging = createSelector(
  selectAdsState,
  state => state.paging
);

export const selectAllByPages = createSelector(
  selectAll,
  selectAdsPaging,
  (ads, page) => ads.slice(page.offset, page.limit)
);
