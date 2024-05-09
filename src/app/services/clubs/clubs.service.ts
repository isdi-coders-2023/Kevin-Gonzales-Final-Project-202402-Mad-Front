import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { Club } from '../../models/clubs.model';

@Injectable({
  providedIn: 'root',
})
export class ClubsService {
  httpClient = inject(HttpClient);
  url = environment.apiUrl + '/articles';

  getClubs() {
    return this.httpClient.get<Club[]>(this.url);
  }
}
