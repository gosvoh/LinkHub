import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { IndexComponent } from './layout/index/index.component';
import { VacanciesComponent } from './layout/vacancies/vacancies.component';
import { ResumesComponent } from './layout/resumes/resumes.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { ResumeComponent } from './layout/persona/resume/resume.component';
import { CompanyComponent } from './layout/persona/company/company.component';
import { CodeComponent } from './layout/persona/code/code.component';
import { StatsComponent } from './layout/persona/stats/stats.component';
import { SettingsComponent } from './layout/persona/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleComponent,
    IndexComponent,
    VacanciesComponent,
    ResumesComponent,
    LoginComponent,
    RegisterComponent,
    ResumeComponent,
    CompanyComponent,
    CodeComponent,
    StatsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
