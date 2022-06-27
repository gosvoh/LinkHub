import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './layout/login/login.component';
import { CodeComponent } from './layout/persona/code/code.component';
import { CompanyComponent } from './layout/persona/company/company.component';
import { ResumeComponent } from './layout/persona/resume/resume.component';
import { SettingsComponent } from './layout/persona/settings/settings.component';
import { StatsComponent } from './layout/persona/stats/stats.component';
import { RegisterComponent } from './layout/register/register.component';
import { ResumesComponent } from './layout/resumes/resumes.component';
import { VacanciesComponent } from './layout/vacancies/vacancies.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'resumes', component: ResumesComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-resume', component: ResumeComponent},
  {path: 'my-company', component: CompanyComponent},
  {path: 'my-code', component: CodeComponent},
  {path: 'my-stats', component: StatsComponent},
  {path: 'my-settings', component: SettingsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
