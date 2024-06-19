import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Gestion Des Patients',
    title: true
  },
  {
    name: 'Gérer Patients',
    url: '/base',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Ajouter Patient',
        url: '/base/add-patient',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Liste Patients',
        url: '/base/liste-patients',
        icon: 'nav-icon-bullet'
      },
      
    ]
  },
  
  {
    name: 'Gestion Des Rendez-vous',
    title: true
  },
  {
    name: 'Gérer Rendez-vous',
    url: '/forms',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'Planifier RDV ',
        url: '/forms/add-rdv',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Consulter RDV',
        url: '/forms/liste-rdv',
        icon: 'nav-icon-bullet'
      },
      
    ]
  },

  {
    name: 'profil d\'utilisateur',
    title: true
  },

  {
    name: 'Profil',
    iconComponent: { name: 'cil-settings' },
    url: '/profile'
  },

  {
    name: 'Gestion des Bulletins',
    title: true
  },

  {
    name: 'Gérer Bulletins',
    url: '/notifications',
    iconComponent: { name: 'cil-print' },
    children: [
      {
        name: 'certificat-medicale',
        url: '/notifications/certificat-medicale',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ordonnance',
        url: '/notifications/ordonnance',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'prise-en-charge',
        url: '/notifications/prise-en-charge',
        icon: 'nav-icon-bullet'
      },
     
    ]
  },
];
