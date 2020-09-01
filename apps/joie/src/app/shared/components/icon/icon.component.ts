import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  #name: string;
  @Input()
  set name(value: string) {
    if (!value) {
      return;
    }
    this.#name = value;
    this.iconRegistry.addSvgIcon(
      this.#name,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${this.#name}.svg`)
    );
  }

  get name(): string {
    return this.#name;
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}
}
