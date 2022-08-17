import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filament } from './filament';

@Injectable({
  providedIn: 'root'
})
export class FilamentService {

  private baseUrl = "http://localhost:8080/filaments";
  constructor(private http:HttpClient) { }
  getFilaments(): Observable<Filament[]>{
    return this.http.get<Filament[]>(`${this.baseUrl}`);
  }
}
