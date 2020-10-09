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

  sessionCards = [
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: true,
      badgeContent: 'Limitedtime offer: 15% off',
      status: 'Course',
    },
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: false,
      badgeContent: '',
      status: 'Workshop',
    },
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: true,
      badgeContent: 'Hurry up! Only 2 spots left.',
      status: 'On-demand',
    },
  ];

  ngOnInit(): void {}
}
