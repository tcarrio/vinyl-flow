import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  title = 'streamer-client';
  get logoSrc() {
    return this.sanitizer.bypassSecurityTrustUrl(environment.logo);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
