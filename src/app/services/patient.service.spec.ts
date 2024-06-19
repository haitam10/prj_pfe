// patient.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all patients', () => {
    const mockPatients = [
      { id: 1, cin: '12345678', nom: 'Doe', prenom: 'John', dateNaissance: '1990-01-01', sexe: 'homme', telephone: '123456789' },
      { id: 2, cin: '87654321', nom: 'Smith', prenom: 'Jane', dateNaissance: '1985-05-15', sexe: 'femme', telephone: '987654321' }
    ];

    service.getAllPatients().subscribe(patients => {
      expect(patients.length).toBe(2);
      expect(patients).toEqual(mockPatients);
    });

    const request = httpMock.expectOne(service['apiUrl']);
    expect(request.request.method).toBe('GET');
    request.flush(mockPatients);
  });

  // Ajoutez d'autres tests pour les autres opérations CRUD (get par ID, post, put, delete)
});
