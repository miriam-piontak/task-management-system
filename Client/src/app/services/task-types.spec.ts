import { TestBed } from '@angular/core/testing';
import { TaskTypesService } from './task-types';

describe('TaskTypes', () => {
  let service: TaskTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

