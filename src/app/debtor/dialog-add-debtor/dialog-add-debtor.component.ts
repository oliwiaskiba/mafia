import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Debtor } from '../../debtor';
import { DebtorsService } from '../../service/debtors.service';

@Component({
  selector: 'app-dialog-add-debtor',
  templateUrl: './dialog-add-debtor.component.html',
  styleUrls: ['./dialog-add-debtor.component.css']
})
export class DialogAddDebtorComponent {

  debtor: Debtor = new Debtor();

  constructor(
    public dialogRef: MatDialogRef<DialogAddDebtorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Debtor,
    private debtorService: DebtorsService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDebtor() {
    this.debtorService.addDebtor(this.debtor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.debtor = new Debtor();
    this.dialogRef.close();
  }
}
