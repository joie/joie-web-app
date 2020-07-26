import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent implements OnInit {
  studentData; // todo add interface
  name = 'heregoesthename';
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(history.state);
    this.studentData = history.state.studentData;
    //getting summary data from route. gotta store checkbox/chip list vals as key:val pair
  }
}
