import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginServiceGuard } from './guard/login-service.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageUsuariosComponent } from './usuarios/page-usuarios/page-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registroUser', component: UsuariosComponent },
  {
    path: 'navbar', component: NavbarComponent,
    children: [
      { path: 'pageUsuario', component: PageUsuariosComponent },
      { path: 'dashboard', component: DashboardComponent },
    ], canActivate: [LoginServiceGuard]
  },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
