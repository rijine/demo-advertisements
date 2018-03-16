import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPreviewComponent } from './advertisement-preview.component';

describe('AdvertisementPreviewComponent', () => {
  let component: AdvertisementPreviewComponent;
  let fixture: ComponentFixture<AdvertisementPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
