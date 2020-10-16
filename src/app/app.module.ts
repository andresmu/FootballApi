// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from './shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './components/material/material.module';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { MatToolbarModule } from '@angular/material/toolbar';
//Routes
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TeamComponent } from './components/team/components/team/team.component';
import { TeamListComponent } from './components/team/components/team-list/team-list.component';
import { PlayerComponent } from './components/player/components/player/player.component';
import { PlayerListComponent } from './components/player/components/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TeamComponent,
    TeamListComponent,
    PlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    MatToolbarModule,
    PageNotFoundModule,
    SharedModule
  ],
  providers: [
    // MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
