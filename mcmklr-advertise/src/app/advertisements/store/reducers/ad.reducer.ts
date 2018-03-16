import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Ad } from '../models/ad.model';
import { Status } from '../models/status.model';
import { AdActions, AdActionTypes } from '../actions/ad.actions';

export interface State extends EntityState<Ad> {
  status: Status;
}

export const adapter: EntityAdapter<Ad> = createEntityAdapter<Ad>();

export const initialState: State = adapter.getInitialState({
  status: new Status({})
});

export function reducer(
  state = initialState,
  action: AdActions
): State {
  switch (action.type) {
    case AdActionTypes.AddAd: {
      return adapter.addOne(action.payload.ad, state);
    }

    case AdActionTypes.UpsertAd: {
      return adapter.upsertOne(action.payload.ad, state);
    }

    case AdActionTypes.AddAds: {
      return adapter.addMany(action.payload.ads, state);
    }

    case AdActionTypes.UpsertAds: {
      return adapter.upsertMany(action.payload.ads, state);
    }

    case AdActionTypes.UpdateAd: {
      return adapter.updateOne(action.payload.ad, state);
    }

    case AdActionTypes.UpdateAds: {
      return adapter.updateMany(action.payload.ads, state);
    }

    case AdActionTypes.DeleteAd: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AdActionTypes.DeleteAds: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AdActionTypes.LoadAds: {
      //return adapter.addAll(action.payload.ads, state);
      return {
        ...state,
        status: new Status({
          loading: true
        })
      };
    }

    case AdActionTypes.LoadAdsSuccess: {
      return adapter.addAll(action.payload.ads, {
        ...state,
        status: new Status({
          loaded: true
        })
      });
    }

    case AdActionTypes.LoadAdsFail: {
      return adapter.addAll(action.payload.ads, {
        ...state,
        status: new Status({})
      });
    }

    case AdActionTypes.ClearAds: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

/* export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(); */
