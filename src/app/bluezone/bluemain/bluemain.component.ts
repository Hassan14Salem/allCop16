import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as Aos from 'aos';

@Component({
  selector: 'app-bluemain',
  templateUrl: './bluemain.component.html',
  styleUrls: ['./bluemain.component.css']
})
export class BluemainComponent {
  customOptions: OwlOptions = {
    margin: 10,
    loop: false,
    autoplay: false,

    responsive: {
      0: {
        items: 1,

      },
      740: {
        items: 1,

      },
      940: {
        items: 1,
        dotsEach: 1,
      }
    },
    nav: false
  }
  ngOnInit(): void {

    // Aos.init( )


  }
  slides = [
    {img:"https://static.wixstatic.com/media/c4b02c_4eab56ea2ddd46228c450c99fbf3c792~mv2.jpg/v1/fill/w_1519,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4b02c_4eab56ea2ddd46228c450c99fbf3c792~mv2.jpg"},

  ];
  AllText=[
    {
      text1: "Blue Zone",

        text2: "The registration for entry to Blue Zone is restricted to parties to the Convention and accredited organizations that will receive an official invitation to attend the conference. Further details about the Blue Zone are provided"
    }



  ]
}
