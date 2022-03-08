import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  private GOOGLE_UPLOAD_FILE_SCRIPT = "https://script.google.com/macros/s/AKfycbypUcqv65Q36I2S2_syaGYbrvpr3FWugpgN4o4SX-OlFEPPDus7Sf3tLgWISoeoZQ8YIw/exec";
  private file: File | null = null;
  noFileSubmitted = true;
  errorMessage = ''
  successMessage = ''

  constructor() { }

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file) {
      let fileName = this.file?.name;

      if (this.validFile(fileName)) {
        const fr = new FileReader();
        fr.readAsArrayBuffer(this.file);
        fr.onload = f => {
          
          const url = this.GOOGLE_UPLOAD_FILE_SCRIPT;
          
          if (f.target?.result && (typeof f.target?.result != 'string') && this.file) {
            const qs = new URLSearchParams({filename: fileName || this.file.name, mimeType: this.file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => this.successMessage = e.filename + 'was successfully uploaded')
            .catch(err => console.log(err));
          }
        }
      } else {
        this.errorMessage = 'Invalid file upload, ensure you upload the txt file generated by the automated marker'
      } 
    }
  }

  validFile(fileName: string) {
    return fileName.startsWith('python-marker') && fileName.endsWith('.txt')
  }


}
