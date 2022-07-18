import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { MerkletreeComponent } from './tool-pages/merkletree/merkletree.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { LandsComponent } from './lands/lands.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mint' },
  { path: 'mint', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'land', component: UserComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'detail/:name', component: LandsComponent},
  { path: 'detail/:name/edit', component: LandsComponent, data: {edit: true}},
  // { path: 'share/:name', component: LandsComponent, data: {page: 'share'}},
  // { path: 'admin', component:  LandsComponent, data: {page: 'profile'}},

  { path: 'merkletree', component: MerkletreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
 