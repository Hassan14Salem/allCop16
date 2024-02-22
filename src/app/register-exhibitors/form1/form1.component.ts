import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<Form1Component>
    ){
  }
  nextForm(){
    const dialogRef = this.dialog.open(Form2Component, {
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

      allNext(){
       this.nextForm()
      this.closeDialog()
      }
}
