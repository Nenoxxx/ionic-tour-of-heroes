import {Routes} from '@angular/router';
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];
