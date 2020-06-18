import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { config } from '../config';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { Killer } from '../killer';

@Injectable({
  providedIn: 'root'
})
export class KillersService {

  constructor(private http: HttpClient) { }

  public getKillers(): Observable<Killer[]> {
    return this.http.get<Killer[]>(`${config.apiUrl}/killers/list`);
  }

  public addKiller(killer: Killer): Observable<boolean> {
    return this.http.post<string>(`${config.apiUrl}/killers/add`, killer).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public updateKiller(id: number, killer: Killer): Observable<boolean> {
    return this.http.put<string>(`${config.apiUrl}/killers/edit/${id}`, killer).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public deleteKiller(id: number): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/killers/remove/${id}`).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public setTarget(targetRequestBody: { killerId: number; targetId: number }): Observable<boolean> {
    return this.http.post<string>(`${config.apiUrl}/killers/set-target`, targetRequestBody).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  public cancelTarget(targetId: number): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/killers/cancel-target/${targetId} `).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }
}
