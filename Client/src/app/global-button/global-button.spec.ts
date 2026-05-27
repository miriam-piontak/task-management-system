import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalButton } from './global-button';

describe('GlobalButton', () => {
  let component: GlobalButton;
  let fixture: ComponentFixture<GlobalButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
