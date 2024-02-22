import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {
  flag:boolean= false;
  slides = [
    {
      img: 'https://static.wixstatic.com/media/c4b02c_5302809507fb403f8d033aabd70ce73e~mv2.jpg/v1/fill/w_340,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c4b02c_5302809507fb403f8d033aabd70ce73e~mv2.jpg',
      text: 'Visa Information',
    },

    {
      img: 'https://static.wixstatic.com/media/c4b02c_0cd9a1bbba6f4dcfa63234ec068654d7~mv2.jpg/v1/fill/w_340,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/The%20Grill%20Four%20Seasons%20Hotel%20Riyadh%20Saudi%20Arabia.jpg',
      text: 'Accommodation',
    },

    {
      img: 'https://static.wixstatic.com/media/c4b02c_6506fc2a218b48df844896608ea3171e~mv2.jpg/v1/fill/w_340,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/breathtaking-night-in-riyadh-tsp4ag4pqllo150n.jpg',
       text:"Virtual Tour"
    },

    {
      img: 'https://static.wixstatic.com/media/c4b02c_e6cbd14a37ea4fafb46babf2c81a899c~mv2.jpeg/v1/fill/w_340,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/181110064236uagr-jpg.jpeg',
      text:"Transportation"
    },

    {
      img: 'https://static.wixstatic.com/media/c4b02c_3cc2cfa8b8f64a2fb80655ee9cca310d~mv2.jpg/v1/fill/w_340,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Al-Masmak-Fort.jpg',
      text:"Local Attraction"
    },
  ];
  dataOfSection:any[] = [
   {
     "headOfSection":"Vision 2030",
     "image":"../../../assets/images/efforts Section/1.webp",
     "text1":"The Vision 2030 was unveiled in 2016 and is a long-term strategy to diversify the economy and move towards a low-carbon future. This vision is a proactive decision made by the Saudi government to tackle climate change head-on and improve people's lives inside and outside the country’s boundaries.",
     "text2":"Following the launch of Vision 2030 in 2016, the Kingdom of Saudi Arabia has taken decisive steps towards a more sustainable future. Multiple major projects have been launched as part of the Vision 2030 including the Red Sea Project and NEOM which aim to foster a regenerative approach to our land, harmonizing with nature as the country grows and develops."

   },

   {
     "headOfSection":"G20 Global Land Initiative",
     "image":"../../../assets/images/efforts Section/2.jpg",
     "text1":"Inaugurated in 2021, the Saudi Green Initiative (SGI) unites environmental protection, energy transition and sustainability programs with the overarching aims of offsetting and reducing emissions, increasing the Kingdom’s use of clean energy and addressing climate change",
   },
   {
     "headOfSection":"Saudi Green Initiative",
     "image":"../../../assets/images/efforts Section/3.jpg",
     "text1":"The G20 Global Initiative on Reducing Land Degradation and Enhancing Conservation of Terrestrial Habitats which was launched in November 2020, at the Riyadh Summit of the G20 leaders. The ambition of this Global Initiative is to prevent, halt and reverse land degradation and reduce degraded land by 50 per cent by 2040. Both a strategy and work plan have been developed and are under active implementation for this Initiative.",
     "text2":"As part of SGI, the country has set an ambitious but achievable greening aspiration to grow 10 billion trees in the coming decades, the equivalent to rehabilitating ~40 Mn ha of degraded lands. This ambition is amongst the highest globally while facing challenging natural conditions."

   },
   {
     "headOfSection":"Middle East Green Initiative",
     "image":"../../../assets/images/efforts Section/4.png",
     "text1":"The Middle East Green Initiative, launched in 2021 by HRH Crown Prince and Prime Minister Mohammed bin Salman, intends to deliver the largest reforestation outcome in the world, which would significantly contribute to achieving the emissions reduction targets under the Paris Agreement and saving biological diversity that is being lost, in an approach known as achieving Land Degradation Neutrality (LDN).",
     "text2":"The Middle East Green Initiative is aiming to increase cooperation and efforts in the region to restore 200 million hectares of degraded land, plant 50 billion trees and increase its vegetation cover by 12 times. The activities will help to reduce 2.5% of the global gas emissions heating up the earth, including the reduction and removal of 670 million tons of carbon dioxide equivalent, which is the total amount of nationally determined contributions of all countries of the region."
   },
   {
     "headOfSection":"National Center for Vegetation Cover & Combating Desertification NCVC",
     "image":"../../../assets/images/efforts Section/5.jpg",
     "text1":"The National Center for Vegetation Cover and Combating Desertification was established in 2019 with the aim of increasing green areas to combat desertification and rehabilitating degraded ecosystems. NCVC oversees the sustainable management and conservation for natural vegetation that exists in mountain forests, watersheds, mangroves, rangelands, national parks and also implements integrated projects to combat desertification. NCVC is also leading the planning of the 10 Billion Trees program under the Saudi Green Initiative.",

   }

  ]
  addRowReverse()
  {
    for(let i=0 ; i<this.dataOfSection.length ; i++)
    {

     if( i%2 === 0) {
       this.flag=true

     }
   }
  }


  ngOnInit(): void {
 this.addRowReverse()

  }
}
