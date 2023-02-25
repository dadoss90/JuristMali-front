import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
   loadChildren: () => import('./bienvenue/bienvenue.module').then(m => m.BienvenuePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'demander',
    loadChildren: () => import('./demander/demander.module').then( m => m.DemanderPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'certificat',
    loadChildren: () => import('./certificat/certificat.module').then( m => m.CertificatPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'casier',
    loadChildren: () => import('./casier/casier.module').then( m => m.CasierPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'commerce',
    loadChildren: () => import('./commerce/commerce.module').then( m => m.CommercePageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'travail',
    loadChildren: () => import('./travail/travail.module').then( m => m.TravailPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'police',
    loadChildren: () => import('./police/police.module').then( m => m.PolicePageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'instance',
    loadChildren: () => import('./instance/instance.module').then( m => m.InstancePageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'paix',
    loadChildren: () => import('./paix/paix.module').then( m => m.PaixPageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'assistance',
    loadChildren: () => import('./assistance/assistance.module').then( m => m.AssistancePageModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'mes-services',
    loadChildren: () => import('./mes-services/mes-services.module').then( m => m.MesServicesPageModule)
  },
  {
    path: 'espace-avocat',
    loadChildren: () => import('./espace-avocat/espace-avocat.module').then( m => m.EspaceAvocatPageModule)
  },
  {
    path: 'me-renseigner',
    loadChildren: () => import('./me-renseigner/me-renseigner.module').then( m => m.MeRenseignerPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./messagerie/messagerie.module').then( m => m.MessageriePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
