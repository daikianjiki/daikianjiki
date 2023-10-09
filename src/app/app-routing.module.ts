import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TechstacksPageComponent } from './pages/techstacks-page/techstacks-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { WorkhistoryComponent } from './pages/workhistory/workhistory.component';

const routes: Routes = [
  { path: "techstacks", component: TechstacksPageComponent },
  { path: "education", component: EducationPageComponent },
  { path: "workhistory", component: WorkhistoryComponent },
  { path: "projects", component: ProjectsPageComponent },
  { path: "**", component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
