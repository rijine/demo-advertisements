import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { AdEffects } from './ad.effects';

describe('AdService', () => {
  // let actions$: Observable<any>
  const actions$: Observable<any> = null;
  let effects: AdEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AdEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
