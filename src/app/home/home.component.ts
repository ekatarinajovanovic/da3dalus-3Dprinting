import { Component, OnInit } from '@angular/core';
import { InstructionsComponent } from '../instructions/instructions.component';
import { InstructionsService } from '../service/instructions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public listSteps:any []=[];
  constructor(private InstructionsService: InstructionsService) { }

  ngOnInit(): void {
    this.getAllSteps();
  }
getAllSteps()
{
  this.InstructionsService.getStepsJson().subscribe(res => {
    this.listSteps = res.steps;
  });
}
}
