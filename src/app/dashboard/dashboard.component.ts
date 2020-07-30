import {Component, OnChanges, OnInit} from '@angular/core';
import { Widgets } from '../widgets';
import { AuthService } from '../service/auth.service';
import { DashboardService } from '../service/dashboard.service';
import { Debtor } from '../debtor';
import { Killer } from '../killer';
import { KillersService } from '../service/killers.service';
import { DebtorsService } from '../service/debtors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private login = '';
  isEditing = false;

  widgets: Widgets[];
  killers: Killer[];
  debtors: Debtor[];
  selectedKiller: Killer;
  selectedDebtor: Debtor;

  constructor(private authService: AuthService, private dashboardService: DashboardService,
              private killersService: KillersService, private debtorsService: DebtorsService,
              private router: Router) {}

  ngOnInit() {
    this.getWidgets();
    this.showWidgets();
    this.getKillers();
    this.getDebtors();
    this.login = this.authService.getLogin();
  }

  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

  getWidgets() {
    this.dashboardService.getWidgets(Number(this.authService.getID())).subscribe(
      widgets => {
        this.widgets = widgets;
      }
    );
  }

  saveWidgets() {
    this.dashboardService.saveWidgets(Number(this.authService.getID()), this.widgets).subscribe
    (success => {
      if (success) {
        this.getWidgets();
      }
    });
  }

  showWidgets() {
    if (this.widgets) {
      const widgetsChecked = this.widgets.filter(wc => wc.type in this.widgets.map(w => w.type));
      widgetsChecked.forEach(wo => wo.checked = true);
    }
  }

  edit() {
    this.isEditing = true;
  }

  confirm() {
    this.isEditing = false;
    this.saveWidgets();
    this.getWidgets();
  }

  cancel() {
    this.isEditing = false;
    this.getWidgets();
  }

  checkUncheck(widgets: Widgets, event) {
    const option = this.widgets.find(w => w.type === widgets.type);
    option.checked = event.checked;
  }

  isVisible(widget: Widgets) {
    return this.widgets.find(wo => wo.type === widget.type).checked;
  }

  getKillers() {
    this.killersService.getKillers().subscribe(
      killers => this.killers = killers
    );
  }

  getDebtors() {
    this.debtorsService.getDebtors().subscribe(
      debtors => this.debtors = debtors
    );
  }

  killerLocation(killer: Killer) {
    this.selectedKiller = killer;
  }

  debtorLocation(debtor: Debtor) {
    this.selectedDebtor = debtor;
  }
}
