import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
  
})
export class DataService {
  private dataUrl = 'assets/data.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
