import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { SomaticExperiencingComponent } from './pages/somatic-experiencing/somatic-experiencing.component';
import { Article1Component } from './pages/blog-articles/article1/article1.component';
import { Article2Component } from './pages/blog-articles/article2/article2.component';
import { Article3Component } from './pages/blog-articles/article3/article3.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'modalidades',
    component: ModalidadesComponent
  },
  {
    path: 'psicoterapia',
    component: PsicoterapiaComponent
  },
  {
    path: 'somatic-experiencing',
    component: SomaticExperiencingComponent
  },
  {
    path: 'article1',
    component: Article1Component
  },
  {
    path: 'article2',
    component: Article2Component
  },
  {
    path: 'article3',
    component: Article3Component
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-register-user',
    component: RegisterUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
