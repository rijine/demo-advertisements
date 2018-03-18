import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { advertisementReducers, advertisementEffects } from './store';

import { AdService } from './services';
import { AdvertisementPreviewComponent } from './containers';
import {
  AdvertisementCardComponent,
  AdvertisementListComponent
} from './components';
import { SpaceFormatPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdvertisementsRoutingModule,
    StoreModule.forFeature('advertisements', advertisementReducers),
    EffectsModule.forFeature(advertisementEffects)
  ],
  declarations: [
    AdvertisementCardComponent,
    AdvertisementListComponent,
    AdvertisementPreviewComponent,
    SpaceFormatPipe
  ],
  providers: [AdService]
})
export class AdvertisementsModule {}
