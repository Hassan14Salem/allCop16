import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as Aos from 'aos';
import { MatDialog } from '@angular/material/dialog';
import { MainRegisterComponent } from 'src/app/register-green-zone/main-register/main-register.component';

@Component({
  selector: 'app-greenmain',
  templateUrl: './greenmain.component.html',
  styleUrls: ['./greenmain.component.css']
})
export class GreenmainComponent {
  constructor(public dialog: MatDialog,){

  }

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
    {img:"https://static.wixstatic.com/media/c4b02c_fa604627710c42a1b701e6c30b96bb4b~mv2.png/v1/fill/w_1519,h_956,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c4b02c_fa604627710c42a1b701e6c30b96bb4b~mv2.png"},

  ];
  AllText=[
    {
      text1: "Green Zone",

        text2: "Open to public for exploring land related exhibitions on innovative technologies, networking, restoration efforts and inclusive activities for all segments of society. Please register in Green Zone here."
    }



  ]

  openForm(){

    const dialogRef = this.dialog.open(MainRegisterComponent, {
      width:'40%',
      height:'70%',
      disableClose : false,
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result == true){

            }
        });
      }
}
