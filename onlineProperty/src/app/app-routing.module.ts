import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactsComponent } from './MyComponents/contacts/contacts.component';
import { EductionComponent } from './MyComponents/eduction/eduction.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
const routes: Routes = [
  // { path:'', redirectTo:"home",pathMatch:"full" },
  //{ path: '**', component: PageNotFoundComponent}
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'education', component: EductionComponent },
  { path: 'project', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
