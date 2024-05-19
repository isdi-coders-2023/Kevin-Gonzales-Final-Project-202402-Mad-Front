import { TestBed } from '@angular/core/testing';
import {
 HttpClientTestingModule,
 HttpTestingController,
} from '@angular/common/http/testing';
import { ClubsService } from './clubs.service';
import { environmentDev } from '../../../enviroments/environment.development';
import { ClubCreateDto, ClubUpdateDto } from '../../models/clubs.model';

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

 describe('getClubs', () => {
  it('should call the correct URL', () => {
   service.getClubs().subscribe();
   const req = controller.expectOne(expectedUrl);
   expect(req.request.method).toBe('GET');
  });
 });

 describe('getClubById', () => {
  it('should call the correct URL', () => {
   service.getClubById('1').subscribe();
   const req = controller.expectOne(`${expectedUrl}/1`);
   expect(req.request.method).toBe('GET');
  });
 });

 describe('createClub', () => {
  it('should call the correct URL', () => {
   service.createClub({} as ClubCreateDto).subscribe();
   expect(controller.expectOne(expectedUrl + '/create').request.method).toBe(
    'POST'
   );
  });
 });

 describe('updateClub', () => {
  it('should call the correct URL', () => {
   service.updateClub('1', {} as ClubUpdateDto).subscribe();
   expect(controller.expectOne(`${expectedUrl}/1`).request.method).toBe(
    'PATCH'
   );
  });
 });

 describe('deleteClub', () => {
  it('should call the correct URL', () => {
   service.delete('1').subscribe();
   expect(controller.expectOne(`${expectedUrl}/1`).request.method).toBe(
    'DELETE'
   );
  });
 });
});
