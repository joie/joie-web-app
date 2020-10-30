import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MainLayoutComponent {
  // headerComponentPortal: ComponentPortal<any>;
  sidenavComponentPortal: ComponentPortal<any>;

  constructor(private route: ActivatedRoute) {
    const { sidenavComponent } = this.route.snapshot.data;
    this.sidenavComponentPortal = new ComponentPortal(sidenavComponent);
    // this.headerComponentPortal = new ComponentPortal(headerComponent);
  }
}
