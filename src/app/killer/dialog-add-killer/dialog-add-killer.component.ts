import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Killer } from '../../killer';
import { KillersService } from '../../service/killers.service';
import { DialogMapKillerComponent } from '../dialog-map-killer/dialog-map-killer.component';

@Component({
  selector: 'app-dialog-add-killer',
  templateUrl: './dialog-add-killer.component.html',
  styleUrls: ['./dialog-add-killer.component.css']
})
export class DialogAddKillerComponent implements OnInit {

  killer: Killer = new Killer();

  constructor(
    public dialogRef: MatDialogRef<DialogAddKillerComponent>,
    private killerService: KillersService,
    public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addKiller() {
    this.killerService.addKiller(this.killer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.killer = new Killer();
    this.dialogRef.close();
  }

  openMapDialog(): void {
    this.dialog.open(DialogMapKillerComponent, {
      width: '500px'
    });
  }

  ngOnInit() {
  }
}
