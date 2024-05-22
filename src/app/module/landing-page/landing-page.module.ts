import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EducationComponent } from './education/education.component';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    EducationComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  exports:[
    NavbarComponent,
    LandingPageComponent
  ]
})
export class LandingPageModule { }
