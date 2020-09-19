import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-upload-select',
  templateUrl: './image-upload-select.component.html',
  styleUrls: ['./image-upload-select.component.scss'],
})
export class ImageUploadSelectComponent {
  previewImage?: SafeUrl;
  @Output() selected = new EventEmitter<File>();

  constructor(private sanitization: DomSanitizer) {}

  chooseFile(event) {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.previewImage = this.sanitization.bypassSecurityTrustUrl(imgUrl);
    this.selected.emit(event.target.files[0]);
  }
}
