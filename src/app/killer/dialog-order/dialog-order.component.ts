import {Component, Inject, Input, OnInit} from '@angular/core';
import { Debtor } from '../../debtor';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { DebtorsService } from '../../service/debtors.service';
import { KillersService } from '../../service/killers.service';
import {Observable} from 'rxjs';
import {Killer} from '../../killer';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.css']
})
export class DialogOrderComponent implements OnInit {

  debtors: Observable<Debtor[]>;
  killer: Killer;
  selectedDebtorId: number;

  formControl = new FormControl('', Validators.required);

  constructor(
    private debtorsService: DebtorsService, private killersService: KillersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogOrderComponent>) {}

  ngOnInit() {
    this.killer = this.data;
    this.debtors = this.debtorsService.getDebtors();
    this.selectedDebtorId = this.getDebtor();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getDebtor() {
    if (this.killer.targetId != null)  {
      return this.killer.targetId;
    }
  }

  setTarget(killerId: number, targetId: number) {
    this.killersService.setTarget({killerId, targetId}).subscribe(
      data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  }

  cancelTarget(targetId: number) {
    this.killersService.cancelTarget(targetId).subscribe(
      data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  }
}
