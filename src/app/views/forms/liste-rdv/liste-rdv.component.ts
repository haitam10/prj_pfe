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
  selector: 'app-liste-rdv',
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
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListeRdvComponent implements OnInit {
  rdvs: any[] = []; // Tableau pour stocker les rendez-vous
  selectedRdv: any; // Objet pour stocker le rendez-vous actuellement sélectionné pour l'édition
  showEditPopup = false; // Booléen pour contrôler l'affichage de la popup d'édition
  selectedDate: string = ''; 

  constructor() { }

  ngOnInit(): void {
    // Récupérer les données des rendez-vous depuis une API ou toute autre source et peupler le tableau des rendez-vous
    this.rdvs = [
      { id: 1, date_rdv: '2023-06-09', heure: '10:00', description: 'Check-up annuel', medecin: { nom: 'Doe', prenom: 'John' }, patient: { nom: 'Smith', prenom: 'Jane' } },
      { id: 2, date_rdv: '2023-06-10', heure: '14:00', description: 'Consultation', medecin: { nom: 'Brown', prenom: 'Charlie' }, patient: { nom: 'Johnson', prenom: 'Michael' } },
      { id: 3, date_rdv: '2023-06-11', heure: '09:00', description: 'Suivi post-opératoire', medecin: { nom: 'White', prenom: 'Walter' }, patient: { nom: 'Williams', prenom: 'Serena' } }
    ];
  }

  filterByDate() {
    if (this.selectedDate === '') {
      // Si aucune date n'est sélectionnée, afficher tous les rendez-vous
      // Vous pouvez soit réinitialiser la liste ici, soit mettre en place une logique différente selon vos besoins
    } else {
      // Filtrer les rendez-vous par date
      this.rdvs = this.rdvs.filter(rdv => rdv.date_rdv === this.selectedDate);
    }
  }

  openEditPopup(rdv: any) {
    this.selectedRdv = rdv;
    this.showEditPopup = true;
  }

  updateRdv() {
    // Logique pour mettre à jour le rendez-vous dans le backend (par exemple, appeler une API)
    // Une fois la mise à jour réussie, fermer la popup d'édition
    this.showEditPopup = false;
  }

  closeEditPopup() {
    this.showEditPopup = false;
  }

  deleteRdv(rdv: any) {
    // Logique pour supprimer le rendez-vous du backend (par exemple, appeler une API)
    // Mettre à jour le tableau des rendez-vous après la suppression réussie
  }
}
