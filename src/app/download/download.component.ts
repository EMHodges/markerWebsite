import { Component } from '@angular/core';
import { DownloadService } from './download.service';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  public downloadId = "python-marker" + ("" + Math.random()).substring(2, 8);
  fileName = '';
  faFileDownload = faFileDownload

  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/octet-stream',
      'Authorization': 'token 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'
    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Accept':  'application/octet-stream',
    })
  };


  constructor(private downloadService: DownloadService, private http: HttpClient) {}

  postDownload() {
    this.downloadService.sendDownloadEmail(this.downloadId)
  }

  getDownload() {
   // this.http.get("https://api.github.com/repos/EMHodges/automatedPythonMarker/releases/assets/52919805", this.httpOptions)
   //   .subscribe((response) => {console.log(response); console.log('clicked')})

   this.http.get("https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe", this.httpOptions)
   .subscribe((response) => {console.log(response); console.log('clicked')})
    let yo = null;
   const url = "https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe"
   fetch(`${url}`, {method: "GET", headers: {'Accept': 'application/vnd.github.v3.raw', 'Authorization': 'token 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'}})
   .then(e => {
     yo = e
     console.log(e)

    
  })
  this.http.get("https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe", this.httpOptions2)
  .subscribe((response) => {console.log(response); console.log('clicked')})
  const url2 = "https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe"
  fetch(`${url2}`, {method: "GET", headers: {'Accept': 'application/vnd.github.v3.raw'}})
  .then(e => {
    yo = e
    console.log(e)

   
 })
  console.log(yo)
}

}

// curl -H "Accept: application/vnd.github.v3.raw" https://raw.githubusercontent.com/EMHodges/markerWebsite/gh-pages/assets/pythonMarker.exe --output hello.exe