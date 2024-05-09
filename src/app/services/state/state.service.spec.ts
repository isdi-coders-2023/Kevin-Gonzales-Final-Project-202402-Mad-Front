import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { of } from 'rxjs';
import { UsersService } from '../users/users.service';
import { ClubsService } from '../clubs/clubs.service';

describe('StateService', () => {
  let service: StateService;

  const mockUserService = {
    login: of({ token: 'mockToken' }),
    getById: of({ id: '1' }),
    register: of({ data: {} }),
  };

  const mockClubsService = {
    getClubs: of([]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UsersService, useValue: mockUserService },
        { provide: ClubsService, useValue: mockClubsService },
      ],
    });
    service = TestBed.inject(StateService);
    spyOn(service, 'jwtDecode').and.returnValue({ id: '1' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
