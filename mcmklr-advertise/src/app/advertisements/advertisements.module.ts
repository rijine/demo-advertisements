import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { HomeComponent } from './containers';
import { advertisementReducers, advertisementEffects } from './store';
import { AdService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AdvertisementsRoutingModule,
    StoreModule.forFeature('advertisements', advertisementReducers),
    EffectsModule.forFeature(advertisementEffects)
  ],
  declarations: [HomeComponent],
  providers: [AdService]
})
export class AdvertisementsModule {}
