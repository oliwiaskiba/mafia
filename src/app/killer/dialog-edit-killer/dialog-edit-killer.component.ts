import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Killer } from '../../killer';
import { KillersService } from '../../service/killers.service';

@Component({
  selector: 'app-dialog-edit-killer',
  templateUrl: './dialog-edit-killer.component.html',
  styleUrls: ['./dialog-edit-killer.component.css']
})
export class DialogEditKillerComponent implements OnInit {

  killer: Killer;
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogEditKillerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private killersService: KillersService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.killer = this.data;
    this.editForm = this.fb.group({
      pseudonym: this.killer.pseudonym,
      salary: this.killer.salary,
      location: this.killer.location,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateKiller(killerId: number) {
    this.killersService.updateKiller(killerId, this.editForm.value).subscribe(
      data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  }
}
