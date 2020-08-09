import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent implements OnInit {
  student; // todo add interface
  name = 'heregoesthename';
  dataToPrint;
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.student = history.state.student;
    console.log(this.student);
    this.getDataForPrinting();
  }

  mapAndFilter(array: {}[]): string[] {
    return array
      .map((item) => {
        let itemKeyVal = Object.entries(item)[0];
        return itemKeyVal[1] ? itemKeyVal[0] : null;
      })
      .filter(Boolean);
  }

  getDataForPrinting() {
    this.dataToPrint = {
      goals: this.mapAndFilter(this.student.goalsCtrl),
      subgoals: [],
      sessionTypes: this.mapAndFilter(this.student.sessionTypesCtrl),
    };

    Object.values(this.student.subgoalsCtrl).forEach((subgoal) => {
      this.dataToPrint.subgoals.push(this.mapAndFilter(subgoal['subgoals']));
    });
  }

  submitData() {
    // todo create api service for this purpose and call it here
  }
}
