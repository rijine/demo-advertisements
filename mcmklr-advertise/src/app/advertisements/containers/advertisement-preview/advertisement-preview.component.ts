import { Component, OnInit } from '@angular/core';
import { AdvertisementModuleState } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as adsReducer from './../../store/reducers/ad.reducer';
import * as adsSelector from './../../store/selectors/ad.selector';
import * as adsActions from './../../store/actions/ad.actions';
import { Ad } from '../../store/models/ad.model';

@Component({
  selector: 'app-advertisement-preview',
  templateUrl: './advertisement-preview.component.html',
  styleUrls: ['./advertisement-preview.component.scss']
})
export class AdvertisementPreviewComponent implements OnInit {
  ads$: Observable<any[]>;
  loading$: Observable<any>;

  constructor(private store: Store<adsReducer.State>) {}

  ngOnInit() {
    this.store.dispatch(new adsActions.LoadAds());
    this.ads$ = this.store.select(adsSelector.selectAllByPages);
    this.loading$ = this.store.select(adsSelector.selectAdsStatus);
    /* .subscribe((d) => {
      console.log(d)
    } ); */
  }
}
