import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetails } from './more-details';

describe('MoreDetails', () => {
  let component: MoreDetails;
  let fixture: ComponentFixture<MoreDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
