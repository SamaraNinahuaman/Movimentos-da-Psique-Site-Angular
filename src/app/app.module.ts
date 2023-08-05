import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SalaAtendimentoComponent } from './pages/sala-atendimento/sala-atendimento.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoFullWhiteComponent } from './assets/svgs/logo-full-white/logo-full-white.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { SomaticExperiencingComponent } from './pages/somatic-experiencing/somatic-experiencing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardModalidadesComponent } from './components/card-modalidades/card-modalidades.component';
import { CardModalidades2Component } from './components/card-modalidades2/card-modalidades2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SalaAtendimentoComponent,
    HeaderComponent,
    FooterComponent,
    CardBlogComponent,
    MenuComponent,
    LogoFullWhiteComponent,
    ModalidadesComponent,
    PsicoterapiaComponent,
    SomaticExperiencingComponent,
    CardModalidadesComponent,
    CardModalidades2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
