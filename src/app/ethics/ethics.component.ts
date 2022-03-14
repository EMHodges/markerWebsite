import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent implements OnInit {

  constructor(private router: Router, private downloadService: DownloadService) {}

  model: any = {};

  ngOnInit() {
    window.scroll(0,0 )
  }

  onSubmit() {
    this.downloadService.triggerDownload()
    this.router.navigate(['/documentation'])
  }
}