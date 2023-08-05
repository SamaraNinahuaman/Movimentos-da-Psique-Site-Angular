import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { SomaticExperiencingComponent } from './pages/somatic-experiencing/somatic-experiencing.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
