import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss'],
})
export class HowitworksComponent implements OnInit {
  worksOptions = [
    {
      icon: 'key',
      description:
        'Sign up and complete our short onboarding process to peronalize your interest. We will be able to recommend more relevant content for you.',
    },
    {
      icon: 'monitor-2',
      description:
        'Explore, compare, and  filter by pillar, activity, price, time, and more. take your first step by enrolling to one of our unique live-straming or on-demand sessions.',
    },
    {
      icon: 'bookmark',
      description:
        'Enrich your growth and become more knowledgable through our professional content and practice tips on Joie’s blog.',
    },
    {
      icon: 'paper-plane', // todo missing icon
      description:
        'Share your journey with friends and family. Invite them to join you on your journey or inspire them to start their own. ',
    },
  ];

  sessionOptions = [
    {
      icon: 'video-player',
      title: 'On-demand sessions',
      description:
        'On-Demand sessions designed for the independent learner. They are suitable for those who need flexibility with time and duration and progress at their own pace. On-demand sessions are also a great format to diversify your learning experience at an affordable price.',
    },
    {
      icon: 'video-1',
      title: 'Live Streaming Sessions',
      description:
        'Live streaming sessions suitable for those who can commit to scheduled sessions and for those who need more structure to stay engaged. Live streaming sessions are also great for those who need a personal connection with a teacher and a group support to keep on their journey.',
    },
    {
      icon: 'clock-1',
      title: '1:1 Coaching Sessions',
      description:
        'Suitable for those who need close personal guidance for various reasons: difficulty coping or persisting. 1:1 coaching sessions are also an excellent opportunity to accelerate your progress and adjust the session based on your needs.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
