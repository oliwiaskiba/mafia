import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Debtor } from '../../debtor';
import { DebtorsService } from '../../service/debtors.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { DialogAddDebtorComponent } from '../dialog-add-debtor/dialog-add-debtor.component';
import { DialogEditDebtorComponent } from '../dialog-edit-debtor/dialog-edit-debtor.component';
import { DialogForgiveComponent } from '../dialog-forgive/dialog-forgive.component';

@Component({
  selector: 'app-debtors-list',
  templateUrl: './debtors-list.component.html',
  styleUrls: ['./debtors-list.component.css']
})
export class DebtorsListComponent implements OnInit {

  debtorData: Debtor[];
  dataSource = new MatTableDataSource(this.debtorData);
  displayedColumns = ['name', 'lastname', 'age', 'debt', 'delete', 'edit', 'forgive', 'location'];

  @Output() selectedDebtor = new EventEmitter();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private debtorsService: DebtorsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getDebtors();
    this.dataSource.sort = this.sort;
  }

  getDebtors() {
    this.debtorsService.getDebtors().subscribe(debtorData => {
      this.debtorData = debtorData;
      this.dataSource.data = this.debtorData;
    });
  }

  openAddDialog() {
   this.dialog.open(DialogAddDebtorComponent, {
      width: '250px'
    }).afterClosed().subscribe(() => {
     this.getDebtors();
   });
  }

  openEditDialog(debtor: Debtor) {
    this.dialog.open(DialogEditDebtorComponent, {
      width: '250px',
      data: {
        id: debtor.id, name: debtor.name, lastname: debtor.lastname, age: debtor.age, debt: debtor.debt, location: debtor.location
      }
    }).afterClosed().subscribe(() => {
      this.getDebtors();
    });
  }

  deleteDebtor(debtor: Debtor) {
    this.debtorsService.deleteDebtor(debtor.id)
      .subscribe(() => {
      this.getDebtors();
    });
  }

  openForgiveDialog(debtor: Debtor) {
    this.dialog.open(DialogForgiveComponent, {
      width: '400px',
      data: {id: debtor.id}
    }).afterClosed().subscribe(() => {
      this.getDebtors();
    });
  }

  location(debtor: Debtor) {
    this.selectedDebtor.emit(debtor);
  }
}
