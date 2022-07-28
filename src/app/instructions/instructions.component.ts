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
  public list_size: number = 0;
  public current_instruction: string ="";

 
  
  constructor(private InstructionsService: InstructionsService) { }


  ngOnInit(): void {
    this.getAllSteps();

    this.current_instruction= this.stepsList[this.currentStep].instruction_text;
   
    

  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    });
    
  }
  
}
