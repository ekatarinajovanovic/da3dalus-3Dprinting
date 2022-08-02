import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  public stepsList: any = [];
  public currentStep: number = 0;
  public currStep: number = 0;
  public list_size: number = 0;
  public current_instruction: string = "";
  public problemsdiv: boolean = false;
  public solution_text: string = "";
  public choosen: number = 0;
  public currentquestion: number = 0;




  constructor(private InstructionsService: InstructionsService, private router: Router, private rout: ActivatedRoute) { }


  ngOnInit(): void {

    this.rout.params.subscribe((params) => {
      this.currStep = params['id'];
    });
    this.getAllSteps();



  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    });

  }

  nextInstruction() {
    this.currStep++;
    this.router.navigate(
      ['/instructions', this.currStep]

    )

  }
  previousInstruction() {
    this.currStep--;
    this.choosen=0;
    this.currentquestion = 0;
    this.router.navigate(
      ['/instructions', this.currStep]

    )

  }

  listProblems() {
    if (this.problemsdiv == false) {
      this.problemsdiv = true;

    }
    else {
      this.problemsdiv = false;
    }
  }
  onItemChange(e: any) {

    this.choosen = e.target.value;
    if (this.stepsList[this.currStep].questions[this.currentquestion].answers[this.choosen].answer_value === 'yes') {
      if (this.currentquestion < this.stepsList[this.currStep]?.questions?.length - 1) {
        this.currentquestion++;
        this.router.navigate(
          ['/instructions', this.currStep]

        )
        console.log(this.currentquestion);
      }

      else {
        this.currStep++;
        this.router.navigate(
          ['/instructions', this.currStep]

        )
      }
    }







  }
}
