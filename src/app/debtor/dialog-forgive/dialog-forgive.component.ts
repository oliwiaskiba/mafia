import { Component, Inject, OnInit } from '@angular/core';
import { DebtorsService } from '../../service/debtors.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-forgive',
  templateUrl: './dialog-forgive.component.html',
  styleUrls: ['./dialog-forgive.component.css']
})
export class DialogForgiveComponent implements OnInit {

  constructor(
    private debtorsService: DebtorsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogForgiveComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancelTask(debtorId: number) {
    this.debtorsService.cancelTask(debtorId)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.dialogRef.close();
  }
}
