import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-certificat-medicale',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './certificat-medicale.component.html',
  styleUrls: ['./certificat-medicale.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CertificatMedicaleComponent implements OnInit {
  certificats: any[] = []; // Tableau pour stocker les certificats médicaux
  filteredCertificats: any[] = []; // Tableau pour stocker les certificats filtrés
  selectedDate: string = ''; 
  searchText: string = ''; // Texte de recherche

  constructor() { }

  ngOnInit(): void {
    // Récupérer les données des certificats médicaux depuis une API ou toute autre source et peupler le tableau des certificats
    this.certificats = [
      { id: 1, date_realisation: '2024-06-09', medecin: { nom: 'Doe', prenom: 'John' }, patient: { nom: 'Smith', prenom: 'Jane' } },
      { id: 2, date_realisation: '2024-06-10', medecin: { nom: 'Brown', prenom: 'Charlie' }, patient: { nom: 'Johnson', prenom: 'Michael' } },
      { id: 3, date_realisation: '2024-06-11', medecin: { nom: 'White', prenom: 'Walter' }, patient: { nom: 'Williams', prenom: 'Serena' } }
    ];

    // Initialisation des certificats filtrés avec tous les certificats au départ
    this.filteredCertificats = this.certificats;
  }

  filterByDate() {
    if (this.selectedDate === '') {
      // Si aucune date n'est sélectionnée, afficher tous les certificats médicaux
      this.filteredCertificats = this.certificats;
    } else {
      // Filtrer les certificats médicaux par date de réalisation
      this.filteredCertificats = this.certificats.filter(certificat => certificat.date_realisation === this.selectedDate);
    }
  }

  filterByText() {
    if (this.searchText === '') {
      // Si aucun texte de recherche n'est saisi, afficher tous les certificats médicaux
      this.filteredCertificats = this.certificats;
    } else {
      // Filtrer les certificats médicaux par texte de recherche
      this.filteredCertificats = this.certificats.filter(certificat => 
        certificat.medecin.nom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        certificat.medecin.prenom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        certificat.patient.nom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        certificat.patient.prenom.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  printCertificat(certificat: any) {
    // Logique pour imprimer le certificat médical
  }
}
