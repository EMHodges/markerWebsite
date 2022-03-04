import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private canDownloads: boolean = false

  triggerDownload() {
    this.canDownloads = true;
  }

  canDownload(): Observable<boolean> { 
    return of(this.canDownloads)
  }
}
