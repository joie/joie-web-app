import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements AfterViewInit {
  headerComponentPortal: ComponentPortal<any>;
  sidenavComponentPortal: ComponentPortal<any>;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const { sidenavComponent, headerComponent } = this.route.snapshot.data;
    console.log(this.route.snapshot.data);
    this.sidenavComponentPortal = new ComponentPortal(sidenavComponent);
    this.headerComponentPortal = new ComponentPortal(headerComponent);
  }
}
