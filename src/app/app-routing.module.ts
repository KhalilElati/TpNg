import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { CvComponent } from './cv_platform/cv/cv.component';
import { CouleurComponent } from './couleur/couleur.component';
import { DetailCvComponent } from './cv_platform/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cv_platform/item-cv/item-cv.component';

const routes: Routes = [
{ path: "cv", component: CvComponent },
{ path: "", redirectTo: "cv", pathMatch: "full" },
{ path: "couleur", component:CouleurComponent },
{path: "cv/:id", component: DetailCvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule { }
