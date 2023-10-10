import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TechstacksPageComponent } from './pages/techstacks-page/techstacks-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { WorkhistoryComponent } from './pages/workhistory/workhistory.component';
import { RevlearnComponent } from './components/revlearn/revlearn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NavbarComponent,
    ProjectsPageComponent,
    TechstacksPageComponent,
    EducationPageComponent,
    WorkhistoryComponent,
    RevlearnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
