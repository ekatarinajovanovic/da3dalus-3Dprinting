import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../filament.service';
import { Filament } from '../filament';


@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.css']
})
export class FilamentComponent implements OnInit {
  public filaments: Filament[] =[];

  constructor(private filamentService:FilamentService) { }

  ngOnInit(): void {
    this.filamentService.getFilaments().subscribe((data: Filament[] )=> {
      this.filaments=data;
    })
  }

}
