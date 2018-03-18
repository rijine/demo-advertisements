import { AdPrice } from './ad.price.model';
import { AdSummary } from './ad.summary.model';

export interface Ad {
  id: string;
  title?: string;
  purpose?: number;
  advertisementThumbnails: string[];
  advertisementPrice?: AdPrice;
  realestateSummary?: AdSummary;
}
