import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMapTo } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Ad } from '../store/models/ad.model';

@Injectable()
export class AdService {
  //public url = 'https://api.mcmakler.de/v1/advertisements';
  public url = '/assets/data/ads.json';
  //&callback=JSONP_CALLBACK
  constructor(private http: HttpClient) {}
  getAds() {
    //return this.http.jsonp(this.url, 'callback').pipe(
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return this.parseData(res.data);
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

  parseData(data: any[]) {
    let ads: Ad[] = [];
    ads = data.map(ad => {
      const advertisementAssets = ad.advertisementAssets;
      let advertisementThumbnails: string[] = Object.keys(
        advertisementAssets
      ).map((thumbKey: any) => {
        if (
          advertisementAssets[thumbKey] &&
          advertisementAssets[thumbKey].advertisementThumbnails &&
          advertisementAssets[thumbKey].advertisementThumbnails.thumb_xs &&
          advertisementAssets[thumbKey].advertisementThumbnails.thumb_xs.url
        ) {
          return advertisementAssets[thumbKey].advertisementThumbnails.thumb_xs
            .url;
        }
      });

      return {
        id: ad['_id']['$id'],
        title: ad.title,
        advertisementThumbnails: advertisementThumbnails,
        realestateSummary: ad.realestateSummary
      };
    });

    return ads;
  }
}
