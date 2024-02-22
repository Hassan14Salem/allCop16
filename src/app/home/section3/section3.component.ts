import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  customOptions: OwlOptions = {
    // items: 3,
    margin: 10,
    loop: true,
    // // margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    // loop: true,
    // // mouseDrag: true,
    // // touchDrag: true,
    // // pullDrag: true,
    dots: true,
    navText: ['<span>←</span>', '<span>→</span>'],
    responsive: {
      0: {
        items: 1,
        dotsEach: 3,
      },
      740: {
        items: 2,
        dotsEach: 2,
      },
      940: {
        items: 3,
        dotsEach: 1,
      }
    },
    nav: true
  }

  slides = [
    { text1: 'About COP16',
      des:"UNCCD COP16 will unite leaders from governments, the private sector, civil society, and global stakeholders to accelerate progress in sustainable land management. We'll explore the vital connections between land and sustainability during high-level sessions, including a Heads of States Summit and interactive dialogues."

    },
    { text1: 'About COP16',
    des:"UNCCD COP16 will unite leaders from governments, the private sector, civil society, and global stakeholders to accelerate progress in sustainable land management. We'll explore the vital connections between land and sustainability during high-level sessions, including a Heads of States Summit and interactive dialogues."

  },

  { text1: 'About COP16',
  des:"UNCCD COP16 will unite leaders from governments, the private sector, civil society, and global stakeholders to accelerate progress in sustainable land management. We'll explore the vital connections between land and sustainability during high-level sessions, including a Heads of States Summit and interactive dialogues."

},

{ text1: 'About COP16',
des:"UNCCD COP16 will unite leaders from governments, the private sector, civil society, and global stakeholders to accelerate progress in sustainable land management. We'll explore the vital connections between land and sustainability during high-level sessions, including a Heads of States Summit and interactive dialogues."

},



  ];
}
