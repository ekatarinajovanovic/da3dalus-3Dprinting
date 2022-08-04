import { Component, OnInit } from '@angular/core';
import { InstructionsService } from '../service/instructions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private InstructionsService: InstructionsService, private Router: Router, private RouterModule: ActivatedRoute) { }
public stepsList: any [] = [];
  ngOnInit(): void {

    this.getAllSteps();
  }
  getAllSteps() {
    this.InstructionsService.getStepsJson().subscribe(res => {
      this.stepsList = res.steps;
    });

  }

}
