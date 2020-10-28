import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutSectionComponent } from './home/about-section/about-section.component';
import { ClientSectionComponent } from './home/client-section/client-section.component';
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { StepsSectionComponent } from './home/steps-section/steps-section.component';
import { ServicesSectionComponent } from './home/services-section/services-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ClientSectionComponent,
    FeatureSectionComponent,
    StepsSectionComponent,
    ServicesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
