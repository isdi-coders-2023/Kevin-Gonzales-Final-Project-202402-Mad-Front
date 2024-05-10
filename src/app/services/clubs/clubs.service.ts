import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Club } from '../../models/clubs.model';
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
}
