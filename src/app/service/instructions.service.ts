import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  constructor(private http: HttpClient) { }
  getStepsJson() {
    return this.http.get<any>("assets/steps.json");
  }
  getBed_LevelingJson(){
    return this.http.get<any>("assets/bed_leveling.json");
  }
  getExtruderJson(){
    return this.http.get<any>("assets/extruder.json");
  }
}
