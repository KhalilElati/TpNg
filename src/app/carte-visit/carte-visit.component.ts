import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visit',
  templateUrl: './carte-visit.component.html',
  styleUrls: ['./carte-visit.component.css']
})
export class CarteVisitComponent {
  FirstName= "";
  Name= "";
  Job="";
  FavouriteCitation="";
  image_path=""
  job_description="";
  job_keywords=""
}

//   changecard(firstname:any,name:any,job:any,citation:any,image:any,job_description:any,keywords:any){
//     this.FirstName=firstname.value;
//     this.Name=name.value;
//     this.Job=job.value;
//     this.FavouriteCitation=citation.value;
//     this.image_path="/assets/images/"+ image.value;
//     this.job_description=job_description.value;
//     this.job_keywords=keywords.value;
// }