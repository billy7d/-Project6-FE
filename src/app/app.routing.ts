import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

 
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './action-component/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { RegisterComponent } from './action-component/register/register.component';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // }, {
  //   path: 'login',
  //   component: LoginComponent,
  // }, 
  {
    path: '',
    redirectTo: 'listSong',
    pathMatch: 'full',
  },
   {
    path: 'login',
    component: LoginComponent,
  }, 
  {
    path: 'register',
    component: RegisterComponent,
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
