import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { advertisementReducers, advertisementEffects } from './store';

import { AdService } from './services';
import { AdvertisementPreviewComponent } from './containers';
import { AdvertisementCardComponent, AdvertisementListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AdvertisementsRoutingModule,
    StoreModule.forFeature('advertisements', advertisementReducers),
    EffectsModule.forFeature(advertisementEffects)
  ],
  declarations: [AdvertisementCardComponent, AdvertisementListComponent, AdvertisementPreviewComponent],
  providers: [AdService]
})
export class AdvertisementsModule {}
