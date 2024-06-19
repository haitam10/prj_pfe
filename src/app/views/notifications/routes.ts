import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gérer Bulletins'
    },
    children: [
      {
        path: '',
        redirectTo: 'badges',
        pathMatch: 'full'
      },
      {
        path: 'alerts',
        loadComponent: () => import('./alerts/alerts.component').then(m => m.AlertsComponent),
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'badges',
        loadComponent: () => import('./badges/badges.component').then(m => m.BadgesComponent),
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'modal',
        loadComponent: () => import('./modals/modals.component').then(m => m.ModalsComponent),
        data: {
          title: 'Modal'
        }
      },
      {
        path: 'prise-en-charge',
        loadComponent: () => import('./prise-en-charge/prise-en-charge.component').then(m => m.PriseEnChargeComponent),
        data: {
          title: 'Prise en charge '
        }
      },
      {
        path: 'ordonnance',
        loadComponent: () => import('./ordonnance/ordonnance.component').then(m => m.OrdonnanceComponent),
        data: {
          title: 'Ordonnance '
        }
      },
      {
        path: 'certificat-medicale',
        loadComponent: () => import('./certificat-medicale/certificat-medicale.component').then(m => m.CertificatMedicaleComponent),
        data: {
          title: 'Certificat-medicale '
        }
      },
      {
        path: 'toasts',
        loadComponent: () => import('./toasters/toasters.component').then(m => m.ToastersComponent),
        data: {
          title: 'Toasts'
        }
      }
    ]
  }
];
