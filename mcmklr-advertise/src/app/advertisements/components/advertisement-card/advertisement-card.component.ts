import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Ad } from '../../store/models/ad.model';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertisementCardComponent implements OnInit {
  @Input() ad: Ad;

  constructor() { }

  ngOnInit() {
  }

}
