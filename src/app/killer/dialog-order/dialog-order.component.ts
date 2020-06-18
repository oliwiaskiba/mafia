import { Component, Inject, OnInit } from '@angular/core';
import { Debtor } from '../../debtor';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { DebtorsService } from '../../service/debtors.service';
import { KillersService } from '../../service/killers.service';

@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.css']
})
export class DialogOrderComponent implements OnInit {

  debtorData: Debtor[];
  dataSource = new MatTableDataSource(this.debtorData);
  displayedColumns = ['name', 'lastname', 'age', 'debt', 'select'];

  constructor(
    private debtorsService: DebtorsService, private killersService: KillersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogOrderComponent>) {}

  ngOnInit() {
    this.getDebtors();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getDebtors() {
    this.debtorsService.getDebtors().subscribe(debtorData => {
      this.debtorData = debtorData;
      this.dataSource.data = this.debtorData;
    });
  }

  setTarget(killerId: number, targetId: number) {
    this.killersService.setTarget({killerId, targetId}).subscribe(
      data => console.log(data), error => console.log(error));
  }

  cancelTarget(targetId: number) {
    this.killersService.cancelTarget(targetId).subscribe(
      data => console.log(data), error => console.log(error));
  }
}
