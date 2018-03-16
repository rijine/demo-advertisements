import { AdAddress } from './ad.address.model';

export interface AdSummary {
  address?: AdAddress;
  numberOfRooms?: number;
  space?: number;
}
