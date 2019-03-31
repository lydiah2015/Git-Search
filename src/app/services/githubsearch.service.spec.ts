import { TestBed } from '@angular/core/testing';

import { GithubsearchService } from './githubsearch.service';

describe('GithubsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubsearchService = TestBed.get(GithubsearchService);
    expect(service).toBeTruthy();
  });
});
