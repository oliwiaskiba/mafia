import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { config } from '../config';
import { Debtor } from '../debtor';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {

  constructor(private http: HttpClient) { }

  public getDebtors(): Observable<Debtor[]> {
    return this.http.get<Debtor[]>(`${config.apiUrl}/debtors/list`);
  }

  public addDebtor(debtor: Debtor): Observable<boolean> {
    return this.http.post<string>(`${config.apiUrl}/debtors/add`, debtor).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public updateDebtor(id: number, debtor: Debtor): Observable<boolean> {
    return this.http.put<string>(`${config.apiUrl}/debtors/edit/${id}`, debtor).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public deleteDebtor(id: number): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/debtors/remove/${id}`).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public cancelTask(id: number): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/debtors/cancel-task/${id} `).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }
}
