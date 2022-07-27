import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  public stepsList: any = [];
  public currentStep: number = 0;
  constructor(private InstructionsService: InstructionsService) { }


  ngOnInit(): void {
    this.getAllSteps();
  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    })
  }
}
