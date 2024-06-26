import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: "full" },
  {path:'landing-page',loadComponent:()=> import('./module/landing-page/landing-page.module').then(m=>m.LandingPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
