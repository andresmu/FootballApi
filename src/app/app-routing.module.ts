import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'leagues/:code',
        loadChildren: () => import('./components/league/league.module').then(m => m.LeagueModule)
      },
      {
        path: 'teams/:league/:season',
        loadChildren: () => import('./components/team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'player/:team/:season',
        loadChildren: () => import('./components/player/player.module').then(m => m.PlayerModule)
      },
      {
        path: '**',
        loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
