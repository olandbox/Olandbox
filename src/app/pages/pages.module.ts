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
import { ThumbComponent } from './lands/thumb/thumb.component';
import { IntroComponent } from './lands/intro/intro.component';
import { CommunityComponent } from './lands/community/community.component';
import { EditorComponent } from './lands/editor/editor.component';
import { LandsComponent } from './lands/lands.component';
import { MappingComponent } from './lands/mapping/mapping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { AlertComponent } from './components/alert/alert.component';

import { DirectivesModule } from '../directives/directives.module'


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
    ThumbComponent,
    IntroComponent,
    CommunityComponent,
    EditorComponent,
    LandsComponent,
    MappingComponent,
    ConfirmModalComponent,
    UploadImageComponent,
    // AlertComponent
  ],
  imports: [
    CommonModule,
    AppBootstrapModule,
    FormsModule,
    PagesRoutingModule,
    AppPipesModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    DirectivesModule
  ],
  exports: [
    TopBarComponent,
    HomeComponent
  ],
  providers: []
})
export class PagesModule { }
