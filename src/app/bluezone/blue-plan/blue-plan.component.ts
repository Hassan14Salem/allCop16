import { Component } from '@angular/core';

@Component({
  selector: 'app-blue-plan',
  templateUrl: './blue-plan.component.html',
  styleUrls: ['./blue-plan.component.css']
})
export class BluePlanComponent {
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
}
