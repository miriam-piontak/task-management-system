import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTaskList } from './type-task-list';

describe('TypeTaskList', () => {
  let component: TypeTaskList;
  let fixture: ComponentFixture<TypeTaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeTaskList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
