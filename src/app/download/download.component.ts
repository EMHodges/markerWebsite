import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';

  constructor(private downloadService: DownloadService) {}

  ngOnInit(): void {}

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

}

