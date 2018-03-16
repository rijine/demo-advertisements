import { AdLocation } from './ad.location.model';

export interface AdAddress {
  street?: string;
  number?: string;
  postalCode?: string;
  city?: string;
  fullAddress?: string;
  location?: AdLocation;
}
