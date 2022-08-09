import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bed } from '../../models/StepsBed';

@Component({
  selector: 'app-bedleveling',
  templateUrl: './bedleveling.component.html',
  styleUrls: ['./bedleveling.component.css']
})
export class BedlevelingComponent implements OnInit {
public bedlevelingType:string = '';
public bedChecked:boolean=false;
public bedVideo: boolean = false;
public bedList:any[]=[];
public end:boolean = false;
public currentStepBed: number = 0;
public buttonVal: string = "fa-solid fa-x";
public stepsBed: Bed [] = [];
  constructor(private InstructionsService: InstructionsService, private router:Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.params.subscribe((params) => {
      this.bedlevelingType = params['type'];
    });
    this.getAllBed_Leveling();
  }
  getAllBed_Leveling(){
    if(this.bedlevelingType === 'manuel')
    {
      this.InstructionsService.getBed_LevelingJson().subscribe(res => {
        this.bedList = res.bed_leveling[0].manuel;
      });
    }
    else if(this.bedlevelingType === 'auto'){
      this.InstructionsService.getBed_LevelingJson().subscribe(res => {
        this.bedList = res.bed_leveling[1].auto;
      });
    }
   
  }
  nextBed() {
    this.currentStepBed++;
    if (this.currentStepBed < this.bedList.length) {

      if (this.bedList[this.currentStepBed].instructions_bed_video == true) {
        this.bedVideo = true;
      }
      else {
        this.bedVideo = false;
      }
      this.bedList[this.currentStepBed].instructions_bed_checked = true;
      this.buttonVal = "fa-solid fa-check";
      this.stepsBed.push({
        checked: false,
        id: this.bedList[this.currentStepBed].instructions_bed_id,
        text: this.bedList[this.currentStepBed].instructions_bed_text,
        name: this.bedList[this.currentStepBed].instructions_bed_name,
        button: "fa-solid fa-x",



      })

    }
    else{
this.end=true;
    }


  

  }

}
