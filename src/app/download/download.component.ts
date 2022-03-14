import { Component, ElementRef, ViewChild } from '@angular/core';
import { DownloadService } from './download.service';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';
  faFileDownload = faFileDownload
  @ViewChild('container', {static: false}) container: ElementRef<HTMLElement> | undefined;

  navigate() {
    window.location.href = "http://127.0.0.1:8000"
  }

  constructor(private downloadService: DownloadService, private http: HttpClient) {}

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