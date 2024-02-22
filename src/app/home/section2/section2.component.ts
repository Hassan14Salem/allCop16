import { Component, OnInit } from '@angular/core';
// import * as Aos from 'aos';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  ngOnInit(): void {
      // Aos.init( )

  }
  AllText=[
    {
      imgNumber: "https://static.wixstatic.com/media/c4b02c_f0a2bc9267834a778cf56878de4857d5~mv2.png/v1/fill/w_30,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2%20(Right).png",
      text1:" Billion HA",
      link:"Land Degraded",

    },
    {
      imgNumber: "https://static.wixstatic.com/media/c4b02c_226b3dd75745465fa08fff302c26952b~mv2.png/v1/fill/w_40,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6%20(Right).png",
      text1:" Billion HA",
      link:"Degraded by 2050 \n without action",

    },
    {
      imgNumber: "https://static.wixstatic.com/media/c4b02c_1ec57b421d3442cb8500809d6902b493~mv2.png/v1/fill/w_80,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3_2(Right).png",
      text1:" Billion",
      link:"People impacted by desertification",

    },
    {
      imgNumber: "https://static.wixstatic.com/media/c4b02c_d8994d7a2bcb4f308db5fe6bec80cbe5~mv2.png/v1/fill/w_36,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3%20(Right).png",
      text1:" Billion Tons",
      link:"Carbon stored by restoring land",

    },{
      imgNumber: "https://static.wixstatic.com/media/c4b02c_303c38b12e554c22a5d374617b225a58~mv2.png/v1/fill/w_88,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/100%20(Right).png",
      text1:" Million HA",
      link:"Droughts worldwide increase since 2020",

    }



  ]
}
