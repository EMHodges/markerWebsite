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

        const fr = new FileReader();
        fr.readAsArrayBuffer(file);
        fr.onload = f => {
          
          const url = "https://script.google.com/macros/s/AKfycbypUcqv65Q36I2S2_syaGYbrvpr3FWugpgN4o4SX-OlFEPPDus7Sf3tLgWISoeoZQ8YIw/exec";  // <--- Please set the URL of Web Apps.
          
          if (f.target?.result && (typeof f.target?.result != 'string')) {
            const qs = new URLSearchParams({filename: this.fileName || file.name, mimeType: file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => console.log(e))  // <--- You can retrieve the returned value here.
            .catch(err => console.log(err));
          }
        }
    }
}

}

