import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { ApplicationComponent } from './application/application.component';
import { ApplyComponent } from './apply/apply.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ehome',
    component: EmphomeComponent
  },
  {
    path: 'mhome',
    component: ManagerhomeComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  },
  {
    path: 'apply',
    component: ApplyComponent
  },
  {
    path: 'applist',
    component: ApplicationlistComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const complist = [LoginComponent, EmphomeComponent, ManagerhomeComponent, ApplicationComponent, ApplyComponent,
                        ApplicationlistComponent, LogoutComponent];
