import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Ad } from '../models/ad.model';

export enum AdActionTypes {
  LoadAds = '[Ad] Load Ads',
  LoadAdsSuccess = '[Ad] Load Ads Success',
  LoadAdsFail = '[Ad] Load Ads Fail',
  AddAd = '[Ad] Add Ad',
  UpsertAd = '[Ad] Upsert Ad',
  AddAds = '[Ad] Add Ads',
  UpsertAds = '[Ad] Upsert Ads',
  UpdateAd = '[Ad] Update Ad',
  UpdateAds = '[Ad] Update Ads',
  DeleteAd = '[Ad] Delete Ad',
  DeleteAds = '[Ad] Delete Ads',
  ClearAds = '[Ad] Clear Ads'
}

export class LoadAds implements Action {
  readonly type = AdActionTypes.LoadAds;

  constructor(/* public payload: { ads: Ad[] } */) {}
}

export class LoadAdsSuccess implements Action {
  readonly type = AdActionTypes.LoadAdsSuccess;

  constructor(public payload: { ads: Ad[] }) {}
}

export class LoadAdsFail implements Action {
  readonly type = AdActionTypes.LoadAdsFail;

  constructor(public payload: { ads: Ad[] }) {}
}

export class AddAd implements Action {
  readonly type = AdActionTypes.AddAd;

  constructor(public payload: { ad: Ad }) {}
}

export class UpsertAd implements Action {
  readonly type = AdActionTypes.UpsertAd;

  constructor(public payload: { ad: Update<Ad> }) {}
}

export class AddAds implements Action {
  readonly type = AdActionTypes.AddAds;

  constructor(public payload: { ads: Ad[] }) {}
}

export class UpsertAds implements Action {
  readonly type = AdActionTypes.UpsertAds;

  constructor(public payload: { ads: Update<Ad>[] }) {}
}

export class UpdateAd implements Action {
  readonly type = AdActionTypes.UpdateAd;

  constructor(public payload: { ad: Update<Ad> }) {}
}

export class UpdateAds implements Action {
  readonly type = AdActionTypes.UpdateAds;

  constructor(public payload: { ads: Update<Ad>[] }) {}
}

export class DeleteAd implements Action {
  readonly type = AdActionTypes.DeleteAd;

  constructor(public payload: { id: string }) {}
}

export class DeleteAds implements Action {
  readonly type = AdActionTypes.DeleteAds;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAds implements Action {
  readonly type = AdActionTypes.ClearAds;
}

export type AdActions =
 LoadAds
 | LoadAdsFail
 | LoadAdsSuccess
 | AddAd
 | UpsertAd
 | AddAds
 | UpsertAds
 | UpdateAd
 | UpdateAds
 | DeleteAd
 | DeleteAds
 | ClearAds;
