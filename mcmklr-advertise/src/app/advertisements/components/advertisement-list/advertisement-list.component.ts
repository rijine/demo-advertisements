import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../../store/models/ad.model';

@Component({
  selector: 'advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss']
})
export class AdvertisementListComponent implements OnInit {
  @Input() ads: Ad[];
  constructor() { }

  ngOnInit() {
  }

}
