import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InstructionsService } from '../service/instructions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esteps-calculator',
  templateUrl: './esteps-calculator.component.html',
  styleUrls: ['./esteps-calculator.component.css']
})
export class EstepsCalculatorComponent implements OnInit {

  constructor(private InstructionsService: InstructionsService, private router:Router) { }
  public inputStepValue:number=0;
  public inputFilamentLength:number =0;
  public filamentLength: number = 200;
  public name:string="";
  public listSteps: any[]= [];
  public id:number =0;
  

  ngOnInit(): void {
    this.getAllSteps();
  }
getAllSteps()
{
  this.InstructionsService.getStepsJson().subscribe(res => {
    this.listSteps = res.steps;
  });
}
back(){
  
  this.router.navigate(
    ['/instructions', 5]

  )
}
}
