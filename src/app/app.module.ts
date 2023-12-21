import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SalaAtendimentoComponent } from './pages/sala-atendimento/sala-atendimento.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoFullWhiteComponent } from './assets/svgs/logo-full-white/logo-full-white.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { SomaticExperiencingComponent } from './pages/somatic-experiencing/somatic-experiencing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardModalidadesComponent } from './components/cards/card-modalidades/card-modalidades.component';
import { CardModalidades2Component } from './components/cards/card-modalidades2/card-modalidades2.component';
import { Article1Component } from './pages/blog-articles/article1/article1.component';
import { Article2Component } from './pages/blog-articles/article2/article2.component';
import { Card1Component } from './components/cards/cards-blog/card1/card1.component';
import { Card2Component } from './components/cards/cards-blog/card2/card2.component';
import { Card3Component } from './components/cards/cards-blog/card3/card3.component';
import { Article3Component } from './pages/blog-articles/article3/article3.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginComponent } from './pages/login/login.component';
import { ArealogadaComponent } from './pages/arealogada/arealogada.component';
import { MenuarealogadaComponent } from './components/menuarealogada/menuarealogada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SalaAtendimentoComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LogoFullWhiteComponent,
    ModalidadesComponent,
    PsicoterapiaComponent,
    SomaticExperiencingComponent,
    CardModalidadesComponent,
    CardModalidades2Component,
    Article1Component,
    Article2Component,
    Card1Component,
    Card2Component,
    Card3Component,
    Article3Component,
    RegisterUserComponent,
    LoginComponent,
    ArealogadaComponent,
    MenuarealogadaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
