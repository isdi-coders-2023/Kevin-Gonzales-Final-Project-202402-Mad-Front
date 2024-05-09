import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { ClubsService } from './clubs.service';
import { environmentDev } from '../../../enviroments/environment.development';

const expectedUrl = new URL('clubs', environmentDev.apiUrl).href;

describe('ClubsService', () => {
  let service: ClubsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ClubsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
