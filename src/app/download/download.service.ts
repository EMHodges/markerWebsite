import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private GOOGLE_EMAIL_SCRIPT = "https://script.google.com/macros/s/AKfycbyYDDBC7mCHrq_0pZ314dAQQ67qYzUzIf0epJ6wi06brsTmwr6Gcy0n0mlvRcGXnesD/exec"
  private canDownloads = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) {}

  triggerDownload() {
    this.canDownloads.next(true);
  }

  canDownload(): Observable<boolean> { 
    return this.canDownloads.asObservable()
  }

  sendDownloadEmail(id: string) {
    var formData: any = new FormData();
      formData.append("id", id);
      this.http.post(this.GOOGLE_EMAIL_SCRIPT, formData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
