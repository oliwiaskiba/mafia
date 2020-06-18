import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Killer } from '../../killer';
import { KillersService } from '../../service/killers.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { DialogAddKillerComponent } from '../dialog-add-killer/dialog-add-killer.component';
import { DialogEditKillerComponent } from '../dialog-edit-killer/dialog-edit-killer.component';
import { DialogOrderComponent } from '../dialog-order/dialog-order.component';

@Component({
  selector: 'app-killers-list',
  templateUrl: './killers-list.component.html',
  styleUrls: ['./killers-list.component.css']
})
export class KillersListComponent implements OnInit {

  killerData: Killer[];
  dataSource = new MatTableDataSource(this.killerData);
  displayedColumns = ['pseudonym', 'salary', 'delete', 'edit', 'target', 'location'];

  @Output() selectedKiller = new EventEmitter();
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private killersService: KillersService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getKillers();
    this.dataSource.sort = this.sort;
  }

  getKillers() {
    this.killersService.getKillers().subscribe(killerData => {
      this.killerData = killerData;
      this.dataSource.data = this.killerData;
    });
  }

  openAddDialog(): void {
    this.dialog.open(DialogAddKillerComponent, {
      width: '250px'
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }

  openEditDialog(killer: Killer) {
    this.dialog.open(DialogEditKillerComponent, {
      width: '250px',
      data: {
        id: killer.id, pseudonym: killer.pseudonym, salary: killer.salary, location: killer.location
      }
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }

  deleteKiller(killer: Killer) {
    this.killersService.deleteKiller(killer.id)
      .subscribe(() => {
      this.getKillers();
    });
  }

  openOrderDialog(killer: Killer) {
    this.dialog.open(DialogOrderComponent, {
      width: '400px',
      data: {id: killer.id}
    }).afterClosed().subscribe(() => {
      this.getKillers();
    });
  }

  location(killer: Killer) {
    this.selectedKiller.emit(killer);
  }
}
