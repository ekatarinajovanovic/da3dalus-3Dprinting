import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Filaments } from 'src/models/StepsFilament';
import { Bed } from '../../models/StepsBed';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstepsCalculatorComponent } from '../esteps-calculator/esteps-calculator.component';
import { HttpClient } from '@angular/common/http';
import { Fehlers } from '../../models/TestDruck';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})

export class InstructionsComponent implements OnInit {
  public stepsList: any = [];
  public stepsExtruder: any = [];
  public buttonVal: string = "fa-solid fa-x";
  public stepsFilaments: Filaments[] = [];
  public problems: Fehlers[] = [];
  public bedList: any = [];
  public video: boolean = false;
  public currentStepFil: number = 0;
  public filamentChecked: boolean = false;
  public currentStep: number = 0;
  public currStep: number = 0;
  public list_size: number = 0;
  public current_instruction: string = "";
  public problemsdiv: boolean = false;
  public solution_text: string = "";
  public choosen: number = 0;
  public currentquestion: number = 0;


  constructor(private InstructionsService: InstructionsService, private router: Router, private rout: ActivatedRoute, private dialogRef: MatDialogModule, private http: HttpClient) { }


  ngOnInit(): void {

    this.rout.params.subscribe((params) => {
      this.currStep = params['id'];
    });


    this.getAllSteps();

    this.getAllExtruder();



  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    });

  }





  getAllExtruder() {
    this.InstructionsService.getExtruderJson().subscribe(res => {
      this.stepsExtruder = res.extruder;
    });
  }
  nextInstruction() {
    this.currStep++;
    this.stepsFilaments.length = 0;
    this.currentStepFil = 0;
    this.buttonVal = "fa-solid fa-x";
    this.video = false;
    this.filamentChecked = false;
    this.router.navigate(
      ['/instructions', this.currStep]

    )

  }
  previousInstruction() {
    this.currStep--;
    this.choosen = 0;
    this.currentquestion = 0;
    this.filamentChecked = false;
    this.video = false;
    this.router.navigate(
      ['/instructions', this.currStep]

    )
    this.stepsFilaments.length = 0;
    this.currentStepFil = 0;
    this.buttonVal = "fa-solid fa-x";




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
  nextFilament() {
    this.currentStepFil++;
    if (this.currentStepFil < this.stepsList[this.currStep].instructions_filament.length) {


      this.stepsList[this.currStep].instructions_filament[this.currentStepFil].instructions_filament_checked = true;
      this.buttonVal = "fa-solid fa-check";
      this.stepsFilaments.push({
        checked: false,
        text: this.stepsList[this.currStep].instructions_filament[this.currentStepFil].instructions_filament_text,
        button: "fa-solid fa-x",



      })

    }
    else if (this.currStep == 3) {
      this.video = true;

    }

  }

  openCalculator() {
    this.router.navigate(
      ['/e-steps-calculator']

    )
  }
  onChange(){

  }


}

