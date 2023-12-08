import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CouleurComponent } from './couleur/couleur.component';
import { CarteVisitComponent } from './carte-visit/carte-visit.component';
import { FilsComponent } from './fils/fils.component';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv_platform/cv/cv.component';
import { DetailCvComponent } from './cv_platform/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cv_platform/item-cv/item-cv.component';
import { ListCvComponent } from './cv_platform/list-cv/list-cv.component';
import { DefaultImagePipe } from './cv_platform/default-image.pipe';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvServiceService } from "./cv_platform/cv-service.service";
import { CvEmbaucheComponent } from './cv_platform/cv-embauche/cv-embauche/cv-embauche.component';

@NgModule({
  declarations: [AppComponent, CouleurComponent, CarteVisitComponent, FilsComponent, ParentComponent, CvComponent, DetailCvComponent, ItemCvComponent, ListCvComponent, DefaultImagePipe, MiniWordComponent, CvEmbaucheComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, 
  
  ],
  providers: [CvServiceService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
