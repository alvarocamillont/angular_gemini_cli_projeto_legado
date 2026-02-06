import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Digimon {
  id: number;
  name: string;
  image: string;
}

export interface DigimonResponse {
  content: Digimon[];
}

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://digi-api.com/api/v1/digimon';

  getDigimons(pageSize = 10) {
    return this.http.get<DigimonResponse>(`${this.apiUrl}?pageSize=${pageSize}`).pipe(
      map(response => response.content)
    );
  }
}
