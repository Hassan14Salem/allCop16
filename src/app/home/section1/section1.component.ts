import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, style, animate } from '@angular/animations';
import * as Aos from 'aos';



@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('5000ms', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('5000ms', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class Section1Component {
  customOptions: OwlOptions = {
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,

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
  
    Aos.init();
  }
  slides = [
    {img:"https://static.wixstatic.com/media/c4b02c_696face0c83d4914b952deedb6a5de0c~mv2.jpg/v1/fill/w_1280,h_463,al_c,q_85,enc_auto/c4b02c_696face0c83d4914b952deedb6a5de0c~mv2.jpg"},
    { img: 'https://static.wixstatic.com/media/c4b02c_c4248dd3616248ed9712dec1f628802a~mv2.jpg/v1/fill/w_1899,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4b02c_c4248dd3616248ed9712dec1f628802a~mv2.jpg' },
    { img: 'https://static.wixstatic.com/media/c4b02c_6d2317311d794a97804cbcddf6cc0e3b~mv2.jpg/v1/fill/w_1899,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4b02c_6d2317311d794a97804cbcddf6cc0e3b~mv2.jpg' },
    { img: 'https://static.wixstatic.com/media/c4b02c_52e92f221fd7410e9a67d2c68dfb8bd2~mv2.png/v1/fill/w_1000,h_362,al_c,q_90,enc_auto/c4b02c_52e92f221fd7410e9a67d2c68dfb8bd2~mv2.png' },
    { img: 'https://static.wixstatic.com/media/c4b02c_4d64ffdd76244b069585886969992a09~mv2.jpg/v1/fill/w_1899,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4b02c_4d64ffdd76244b069585886969992a09~mv2.jpg' }

  ];
  AllText=[
    {
      text1: "UNCCD COP 16 Riyadh",
        text2: "Restore Land To Preserve Hope For All",
        link:"More About Saudi..",
        date:"2-13 December, 2024 "
    }



  ]
}
