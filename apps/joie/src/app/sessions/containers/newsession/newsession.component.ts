import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newsession',
  templateUrl: './newsession.component.html',
  styleUrls: ['./newsession.component.scss'],
})
export class NewsessionComponent implements OnInit {
  widgets = [
    {
      image: '',
      content: '4 hours',
    },
    {
      image: '',
      content: 'On-demand',
    },
    {
      image: '',
      content: 'Beginners',
    },
    {
      image: '',
      content: '$180',
    },
    {
      image: '',
      content: 'share',
    },
  ];
  ngOnInit(): void {}
}
