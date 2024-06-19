import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective
} from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-liste-patients',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective
  ],
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = []; // Tableau pour stocker les patients
  selectedPatient: any; // Objet pour stocker le patient actuellement sélectionné pour l'édition
  showEditPopup = false; // Booléen pour contrôler l'affichage de la popup d'édition

  constructor() { }

  ngOnInit(): void {
    // Récupérer les données des patients depuis une API ou toute autre source et peupler le tableau des patients
    this.patients = [
      { id: 1, cin: '12345678', nom: 'Doe', prenom: 'John', dateNaissance: '1990-01-01', sexe: 'homme', telephone: '123456789' },
      { id: 2, cin: '87654321', nom: 'Smith', prenom: 'Jane', dateNaissance: '1985-05-15', sexe: 'femme', telephone: '987654321' },
      { id: 3, cin: '11223344', nom: 'Brown', prenom: 'Charlie', dateNaissance: '2000-07-20', sexe: 'homme', telephone: '112233445' }
    ];
  }

  openEditPopup(patient: any) {
    this.selectedPatient = patient;
    this.showEditPopup = true;
  }

  updatePatient() {
    // Logique pour mettre à jour le patient dans le backend (par exemple, appeler une API)
    // Une fois la mise à jour réussie, fermer la popup d'édition
    this.showEditPopup = false;
  }

  closeEditPopup() {
    this.showEditPopup = false;
  }

  deletePatient(patient: any) {
    // Logique pour supprimer le patient du backend (par exemple, appeler une API)
    // Mettre à jour le tableau des patients après la suppression réussie
  }
}
