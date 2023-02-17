import { TestBed } from '@angular/core/testing';

import { AbsentListService } from './absent-list.service';

describe('AbsentListService', () => {
  let service: AbsentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
