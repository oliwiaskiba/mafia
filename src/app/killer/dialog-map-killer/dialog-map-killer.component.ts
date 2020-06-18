import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-map-killer',
  templateUrl: './dialog-map-killer.component.html',
  styleUrls: ['./dialog-map-killer.component.css']
})
export class DialogMapKillerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogMapKillerComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
