import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figure-image',
  templateUrl: './figure-image.component.html',
  styleUrls: ['./figure-image.component.scss'],
})
export class FigureImageComponent {
  @Input() src: string;
  @Input() alt: string;
  @Input() caption: string;

}
