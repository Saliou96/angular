import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MinibarComponent} from './components/minibar/minibar.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from "./sections/footer/footer.component";
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    MinibarComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactsComponent,
    TestimonialsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
