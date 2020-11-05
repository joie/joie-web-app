import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teachersForm = this.fb.group({
    format: [null],
    typeOfSession: [null],
    pillar: [null],
    activity: [null],
    level: [null],
    price: [null],
    date: [null],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
