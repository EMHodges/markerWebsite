import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Observable, takeUntil } from 'rxjs';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

  private canDownload: boolean = false;
  canDown: Observable<boolean>;


  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';
  faFileDownload = faFileDownload
  @ViewChild('container', {static: false}) container: ElementRef<HTMLElement> | undefined;

  navigate() {
    window.location.href = "http://127.0.0.1:8000"
  }

  constructor(private downloadService: DownloadService, private http: HttpClient) {    
    this.canDown = this.downloadService.canDownload()
  }

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

  jumpToSection(section: string) {
    console.log(section)
    console.log(this.container?.nativeElement)
    this.container?.nativeElement.querySelector(`#${section}`)?.scrollIntoView()
  }

}

// curl -H "Accept: application/vnd.github.v3.raw" https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe --output hello.exe