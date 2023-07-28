import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SalaAtendimentoComponent } from './pages/sala-atendimento/sala-atendimento.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { LogoWhiteFullComponent } from './assets/svgs/logo-white-full/logo-white-full.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    SalaAtendimentoComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    CardBlogComponent,
    LogoWhiteFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
