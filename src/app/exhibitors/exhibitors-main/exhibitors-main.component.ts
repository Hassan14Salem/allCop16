import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { Form1Component } from 'src/app/register-exhibitors/form1/form1.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';


@Component({
  selector: 'app-exhibitors-main',
  templateUrl: './exhibitors-main.component.html',
  styleUrls: ['./exhibitors-main.component.css']
})
export class ExhibitorsMainComponent implements OnInit{
  // constructor(public dialog: MatDialog,){

  // }
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
  Aos.init();
  
}
  // openForm(){

  //   const dialogRef = this.dialog.open(Form1Component, {
  //     width:'70%',
  //     height:'70%',
  //     disableClose : true,
  //       });

  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result == true){

  //           }
  //       });
  //     }
   
}
