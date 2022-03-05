import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
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
    window.location.href = "https://formfacade.com/public/108681976523810358966/all/form/1FAIpQLSfsgf3-M9WaeUvA1TnrjZb0WXvL9fppHHxaOZQL9Q9199SUVw"
   // this.router.navigate(['/download'])
  }
}