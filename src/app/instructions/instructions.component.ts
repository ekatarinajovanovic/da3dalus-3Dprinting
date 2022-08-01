import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  public stepsList: any = [];
  public currentStep : number = 0;
  public list_size: number = 0;
  public current_instruction: string ="";
  public problemsdiv: boolean = false;
 

 
  
  constructor(private InstructionsService: InstructionsService, private router: Router, private rout:ActivatedRoute) { }


  ngOnInit(): void {
    
    this.getAllSteps();
   
        
    this.rout.queryParams.subscribe((queryParams) => {
      this.currentStep=queryParams['id'];
    });
  

   
   
    

  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    });
    
  }

  nextInstruction(){
    this.currentStep++;
    this.router.navigate(
      ['/instructions'],
      {
        queryParams: { id: this.currentStep }
      }
       
      );
    
  }
  previousInstruction(){
    this.currentStep --;
    this.router.navigate(
      ['/instructions'],
      {
        queryParams: { id: this.currentStep }
      }
       
      );
  }

  listProblems(){
   if(this.problemsdiv==false){
    this.problemsdiv=true;
  
   }
   else{
    this.problemsdiv=false;
   }
  }
}
