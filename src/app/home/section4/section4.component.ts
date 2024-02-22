import { Component } from '@angular/core';
// import AOS from "aos";

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {
  POSTS: any;
  page: number = 1;
  total: any ;
  data:any=[]
   imgs = [
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/026.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/027.jpg",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/020.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/010.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/002.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/008.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/013.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/025.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/009.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/011.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/026.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/027.jpg",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/020.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/010.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/002.png",
    },
    {
      img: "https://dev.tecsolutiongroup.com:43377/assets/images/Partners/008.png",
    },
  ];
  navText:any= ['>>']
   constructor(){

   }

   getOne(){
    this.data=this.imgs
   }
   nav(event:any){

    this.page = event
    this.getOne()
  
      }
}
