import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBootstrapModule } from "../app-bootstrap.module";
import { FormsModule } from '@angular/forms';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

import { AppPipesModule } from "../pipes/app-pipes.module";

// Components
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { LoginBoardComponent } from './login-board/login-board.component';
import { LogoutBoardComponent } from './logout-board/logout-board.component';
import { FailModalComponent } from './components/fail-modal/fail-modal.component';
import { SucessModalComponent } from "./components/sucess-modal/sucess-modal.component";

import { MerkletreeComponent } from './tool-pages/merkletree/merkletree.component';
import { LoadingComponent } from '../pages/components/loading/loading.component';
import { UserComponent } from './user/user.component';
import { CardsComponent } from '../pages/components/cards/cards.component';
import { DetailComponent } from './detail/detail.component';
import { MintHistoryComponent } from './components/mint-history/mint-history.component';
import { HistoryComponent } from './history/history.component';
// import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    TopBarComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    LoginBoardComponent,
    LogoutBoardComponent,
    FailModalComponent,
    SucessModalComponent,
    MerkletreeComponent,
    LoadingComponent,
    UserComponent,
    CardsComponent,
    DetailComponent,
    MintHistoryComponent,
    HistoryComponent,
    // AlertComponent
  ],
  imports: [
    CommonModule,
    AppBootstrapModule,
    FormsModule,
    PagesRoutingModule,
    AppPipesModule,

  ],
  exports: [
    TopBarComponent,
    HomeComponent
  ],
  providers: []
})
export class PagesModule { }
