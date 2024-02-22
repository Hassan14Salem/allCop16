import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { Form3Component } from '../form3/form3.component';
import { Form1Component } from '../form1/form1.component';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<Form2Component>
    ){
  }
  lastNextForm(){
    const dialogRef = this.dialog.open(Form3Component, {
      width:'70%',
      height:'70%',
      disableClose : true,
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result == true){

            }
        });
      }
      closeDialog() {
        this.Matdialog.close(true);
      }

      lastNext(){
       this.lastNextForm()
      this.closeDialog()
      }

      backForm(){
        const dialogRef = this.dialog.open(Form1Component, {
          width:'70%',
          height:'70%',
          disableClose : true,
            });

            dialogRef.afterClosed().subscribe(result => {
              if (result == true){

                }
            });
          }
          allBack(){
            this.backForm()
            this.closeDialog()
          }
}
