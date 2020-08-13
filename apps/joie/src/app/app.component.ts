import { Component, OnInit } from '@angular/core';
import { KalutraIntegrationService } from './services/kaltura-integration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private kalutraIntegrationService: KalutraIntegrationService) {}

  ngOnInit() {
    this.kalutraIntegrationService.boot();
  }
}
