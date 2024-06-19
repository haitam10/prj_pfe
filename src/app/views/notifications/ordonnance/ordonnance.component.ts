import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ordonnance',
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
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdonnanceComponent implements OnInit {
  ordonnances: any[] = []; // Tableau pour stocker les ordonnances
  filteredOrdonnances: any[] = []; // Tableau pour stocker les ordonnances filtrées
  selectedDate: string = ''; 
  searchText: string = ''; // Texte de recherche

  constructor() { }

  ngOnInit(): void {
    // Récupérer les données des ordonnances depuis une API ou toute autre source et peupler le tableau des ordonnances
    this.ordonnances = [
      { id: 1, date_realisation: '2024-06-09', medecin: { nom: 'Doe', prenom: 'John' }, patient: { nom: 'Smith', prenom: 'Jane' } },
      { id: 2, date_realisation: '2024-06-10', medecin: { nom: 'Brown', prenom: 'Charlie' }, patient: { nom: 'Johnson', prenom: 'Michael' } },
      { id: 3, date_realisation: '2024-06-11', medecin: { nom: 'White', prenom: 'Walter' }, patient: { nom: 'Williams', prenom: 'Serena' } }
    ];

    // Initialisation des ordonnances filtrées avec tous les ordonnances au départ
    this.filteredOrdonnances = this.ordonnances;
  }

  filterByDate() {
    if (this.selectedDate === '') {
      // Si aucune date n'est sélectionnée, afficher toutes les ordonnances
      this.filteredOrdonnances = this.ordonnances;
    } else {
      // Filtrer les ordonnances par date de réalisation
      this.filteredOrdonnances = this.ordonnances.filter(ordonnance => ordonnance.date_realisation === this.selectedDate);
    }
  }

  filterByText() {
    if (this.searchText === '') {
      // Si aucun texte de recherche n'est saisi, afficher toutes les ordonnances
      this.filteredOrdonnances = this.ordonnances;
    } else {
      // Filtrer les ordonnances par texte de recherche
      this.filteredOrdonnances = this.ordonnances.filter(ordonnance => 
        ordonnance.medecin.nom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        ordonnance.medecin.prenom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        ordonnance.patient.nom.toLowerCase().includes(this.searchText.toLowerCase()) || 
        ordonnance.patient.prenom.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  printOrdonnance(ordonnance: any) {
    // Logique pour imprimer l'ordonnance
  }
}
