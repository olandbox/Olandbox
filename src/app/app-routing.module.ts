import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: '404', component: ErrorComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
