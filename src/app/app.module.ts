import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSortModule,
    MatTableModule, MatToolbarModule, MatCheckboxModule, MatDialogModule, MatIconModule
} from '@angular/material';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { KillersListComponent } from './killer/killers-list/killers-list.component';
import { DebtorsListComponent} from './debtor/debtors-list/debtors-list.component';
import { MapComponent } from './map/map.component';
import { DialogAddDebtorComponent } from './debtor/dialog-add-debtor/dialog-add-debtor.component';
import { DialogAddKillerComponent } from './killer/dialog-add-killer/dialog-add-killer.component';
import { DialogEditDebtorComponent } from './debtor/dialog-edit-debtor/dialog-edit-debtor.component';
import { DialogEditKillerComponent } from './killer/dialog-edit-killer/dialog-edit-killer.component';
import { DialogOrderComponent } from './killer/dialog-order/dialog-order.component';
import { DialogForgiveComponent } from './debtor/dialog-forgive/dialog-forgive.component';
import { DialogMapKillerComponent } from './killer/dialog-map-killer/dialog-map-killer.component';
import { DialogMapDebtorComponent } from './debtor/dialog-map-debtor/dialog-map-debtor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    KillersListComponent,
    DebtorsListComponent,
    MapComponent,
    DialogAddDebtorComponent,
    DialogAddKillerComponent,
    DialogEditDebtorComponent,
    DialogEditKillerComponent,
    DialogOrderComponent,
    DialogForgiveComponent,
    DialogMapKillerComponent,
    DialogMapDebtorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        NgxWidgetGridModule,
        FormsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatCardModule,
        MatDialogModule,
        MatSortModule,
        MatIconModule
    ],
  entryComponents: [
    DialogAddDebtorComponent,
    DialogAddKillerComponent,
    DialogEditDebtorComponent,
    DialogEditKillerComponent,
    DialogOrderComponent,
    DialogForgiveComponent,
    DialogMapKillerComponent,
    DialogMapDebtorComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
