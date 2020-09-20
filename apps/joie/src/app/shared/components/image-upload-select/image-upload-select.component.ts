import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-upload-select',
  templateUrl: './image-upload-select.component.html',
  styleUrls: ['./image-upload-select.component.scss'],
})
export class ImageUploadSelectComponent {
  previewImage?: SafeUrl = this.sanitization.bypassSecurityTrustUrl('https://picsum.photos/40/40');
  @Output() selected = new EventEmitter<File>();

  constructor(private sanitization: DomSanitizer) {}

  chooseFile(event) {
    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    this.previewImage = this.sanitization.bypassSecurityTrustUrl(imgUrl);
    this.selected.emit(file);
  }
}
