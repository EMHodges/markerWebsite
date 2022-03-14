import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent {

  constructor(private router: Router, private downloadService: DownloadService) {}

  model: any = {};

  onSubmit() {
    this.downloadService.triggerDownload()
    this.router.navigate(['/documentation'])
  }
}