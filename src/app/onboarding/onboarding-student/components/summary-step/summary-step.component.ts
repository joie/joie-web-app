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
  dataToPrint;
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentData = history.state.studentData;

    this.getDataForPrinting();
  }

  mapAndFilter(array: {}[]): string {
    return array
      .map((item) => {
        let itemKeyVal = Object.entries(item)[0];
        return itemKeyVal[1] ? itemKeyVal[0] : null;
      })
      .filter(Boolean)
      .join(' and ');
  }

  getDataForPrinting() {
    this.dataToPrint = {
      goals: this.mapAndFilter(this.studentData.goalsCtrl),
      subgoals: '',
      sessionTypes: this.mapAndFilter(this.studentData.sessionTypesCtrl),
    };

    Object.values(this.studentData.subgoals).forEach((subgoal) => {
      this.dataToPrint.subgoals =
        this.dataToPrint.subgoals + this.mapAndFilter(subgoal['subgoalsCtrl']);
    });
  }

  submitData() {
    // todo create api service for this purpose and call it here
  }
}
