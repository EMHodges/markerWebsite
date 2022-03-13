import { Component } from '@angular/core';
import { DownloadService } from './download.service';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';
  faFileDownload = faFileDownload
  constructor(private downloadService: DownloadService) {}

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

}

