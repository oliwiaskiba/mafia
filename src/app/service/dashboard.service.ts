import { Injectable } from '@angular/core';
import { config } from '../config';
import { Widgets } from '../widgets';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';

interface DashboardResponse {
  widgets: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getWidgets(id: number): Observable<Widgets[]> {
    return this.http.get<DashboardResponse>(`${config.apiUrl}/dashboard/get/${id}`).pipe(
      map(value => JSON.parse(value.widgets)),
      catchError(error => {
        alert(error.error);
        return of([]);
      })
    );
  }

  public saveWidgets(userId: number, widgets: Widgets[]): Observable<boolean> {
    return this.http.post<string>(`${config.apiUrl}/dashboard/add`, { userId, widgets: JSON.stringify(widgets) }).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    );
  }
}
