import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  constructor(public dialog: MatDialog,
    public Matdialog: MatDialogRef<Form3Component>
    ){
  }
  backForm(){
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
      allBack(){
        this.backForm()
        this.closeDialog()
      }
}
