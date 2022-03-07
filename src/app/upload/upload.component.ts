import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  private GOOGLE_UPLOAD_FILE_SCRIPT = "https://script.google.com/macros/s/AKfycbypUcqv65Q36I2S2_syaGYbrvpr3FWugpgN4o4SX-OlFEPPDus7Sf3tLgWISoeoZQ8YIw/exec";

  constructor() { }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
        let fileName = file.name;

        const fr = new FileReader();
        fr.readAsArrayBuffer(file);
        fr.onload = f => {
          
          const url = this.GOOGLE_UPLOAD_FILE_SCRIPT;
          
          if (f.target?.result && (typeof f.target?.result != 'string')) {
            const qs = new URLSearchParams({filename: fileName || file.name, mimeType: file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => console.log(e))
            .catch(err => console.log(err));
          }
        }
    }
}


}
