import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  private GOOGLE_EMAIL_SCRIPT = "https://script.google.com/macros/s/AKfycbxrhGWvS5BUYW4d6-0LU_PhILJYUoqfYKYGiAqcVzhx5RdLmRQFT2GVIKMlQHQgg8qq0w/exec"

  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';

  constructor(private downloadService: DownloadService, private http: HttpClient) {}

  ngOnInit(): void {}

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);
        this.http.post(this.GOOGLE_EMAIL_SCRIPT, formData).subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

        console.log(formData)
        console.log(this.fileName)
    }
}

}

