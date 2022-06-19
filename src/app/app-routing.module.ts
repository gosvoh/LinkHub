import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { ResumesComponent } from './layout/resumes/resumes.component';
import { VacanciesComponent } from './layout/vacancies/vacancies.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'resumes', component: ResumesComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
