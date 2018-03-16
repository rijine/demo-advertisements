import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as adsAction from './../actions/ad.actions';
import { AdService } from '../../services/ad.service';
import { Ad } from '../models/ad.model';

@Injectable()
export class AdEffects {
  constructor(private actions$: Actions, private adService: AdService) {}

  @Effect()
  loadAds$ = this.actions$.ofType(adsAction.AdActionTypes.LoadAds).pipe(
    switchMap(() => {
      return this.adService.getAds().pipe(
        map((ads: Ad[]) => new adsAction.LoadAdsSuccess({ ads })),
        catchError(error => of(new adsAction.LoadAdsFail({ ads: [] })))
      );
    })
  );
}
