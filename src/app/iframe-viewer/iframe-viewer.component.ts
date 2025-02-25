import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-viewer',
  templateUrl: './iframe-viewer.component.html',
  styleUrls: ['./iframe-viewer.component.scss']
})
export class IframeViewerComponent {
  currentProjectUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.currentProjectUrl = this.sanitizeUrl('http://localhost:4201'); // Default project
  }

  loadProject(url: string) {
    this.currentProjectUrl = this.sanitizeUrl(url);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

