import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { MerkletreeComponent } from './tool-pages/merkletree/merkletree.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mint' },
  { path: 'mint', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'land', component: UserComponent },
  { path: 'detail/:name', component: DetailComponent },
  { path: 'history', component: HistoryComponent },

  { path: 'merkletree', component: MerkletreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
 