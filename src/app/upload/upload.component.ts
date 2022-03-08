import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  private GOOGLE_UPLOAD_FILE_SCRIPT = "https://script.google.com/macros/s/AKfycbypUcqv65Q36I2S2_syaGYbrvpr3FWugpgN4o4SX-OlFEPPDus7Sf3tLgWISoeoZQ8YIw/exec";
  model: any = {};
  private file: File | null = null;

  constructor() { }

  onFileSelected($f: any) {}

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file) {
        let fileName = this.file?.name;

        const fr = new FileReader();
        fr.readAsArrayBuffer(this.file);
        fr.onload = f => {
          
          const url = this.GOOGLE_UPLOAD_FILE_SCRIPT;
          
          if (f.target?.result && (typeof f.target?.result != 'string') && this.file) {
            const qs = new URLSearchParams({filename: fileName || this.file.name, mimeType: this.file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => console.log(e))
            .catch(err => console.log(err));
          }
        }
    }
}


}
