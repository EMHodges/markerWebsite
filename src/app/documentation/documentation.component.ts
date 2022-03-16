import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  canDownload: Observable<boolean>;


  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';
  faFileDownload = faFileDownload
  @ViewChild('container', {static: false}) container: ElementRef<HTMLElement> | undefined;

  navigate() {
    window.location.href = "http://127.0.0.1:8000"
  }

  ngOnInit() {
    window.scroll(0,0 )
  }

  constructor(private downloadService: DownloadService, private router: Router) {    
    this.canDownload = this.downloadService.canDownload()
  }

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

  jumpToSection(section: string) {
    this.container?.nativeElement.querySelector(`#${section}`)?.scrollIntoView()
  }

  navigateToEthics() {
    this.router.navigate(['/ethics'])
  }

}

// curl -H "Accept: application/vnd.github.v3.raw" https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe --output hello.exe