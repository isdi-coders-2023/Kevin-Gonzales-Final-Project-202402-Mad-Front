import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Club, ClubCreateDto } from '../../models/clubs.model';
import { environmentDev } from '../../../enviroments/environment.development';

@Injectable({
 providedIn: 'root',
})
export class ClubsService {
 httpClient = inject(HttpClient);
 backUrl = environmentDev.apiUrl + '/clubs';

 getClubs() {
  return this.httpClient.get<Club[]>(this.backUrl);
 }

 getClubById(id: string) {
  return this.httpClient.get<Club>(this.backUrl + '/' + id);
 }

 createClub(data: ClubCreateDto) {
  const url = this.backUrl + '/create';
  console.log(data);
  return this.httpClient.post(url, data);
 }

 updateClub(id: string, data: ClubCreateDto) {
  return this.httpClient.patch(this.backUrl + '/' + id, data);
 }

 delete(id: string) {
  console.log(id);
  return this.httpClient.delete(this.backUrl + '/' + id);
 }
}
