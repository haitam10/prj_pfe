// patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8081/api/v1/patients'; // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  // GET tous les patients
  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET un patient par ID
  getPatientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST un nouveau patient
  ajouterPatient(patient: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, patient);
  }

  // PUT mettre à jour un patient
  mettreAJourPatient(id: number, patient: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, patient);
  }

  // DELETE un patient
  supprimerPatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
