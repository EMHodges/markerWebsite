import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { strictEqual } from 'assert';
import { BehaviorSubject } from 'rxjs';
import { UploadIdService } from '../upload/upload-id.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  private GOOGLE_UPLOAD_FILE_SCRIPT = "https://script.google.com/macros/s/AKfycbwjlQrzNtvxjm8GCQt6KSyYAMOWfm_qD2IIB5SvYl03rQUBLMD4-W3NTSDjVlMGwgDF/exec"
  private file: File | null = null;

  errorMessage = '';
  successMessage = '';
  loadingMessage = '';

  isFileInputted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isFileSubmitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isFileUploaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  askForId: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isManualIdValid:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isValidFileUploaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  fileUpload = new FormControl('', Validators.required)
  manualId = new FormControl('', Validators.pattern('^\\d{6,6}$'))

  constructor(private uploadIdService: UploadIdService) {}

  handleFileInput(event: any) {
    this.isFileInputted.next(true)
    this.file = event.target.files[0];
    if (this.file?.name && this.validFile(this.file?.name)) {
      this.isValidFileUploaded.next(true)
      this.errorMessage = ''
    } else if (this.file?.name && !this.validFile(this.file?.name) ) {
      this.errorMessage = ''
      this.isValidFileUploaded.next(false)
      if (!this.file.name.startsWith('python-marker')) {
        if (this.errorMessage == '') {
          this.errorMessage += 'Invalid file name -'
        }
        this.errorMessage += " check file name starts with 'python-marker'"
      } if (!this.file.name.endsWith('.txt')) {
          if (this.errorMessage == '') {
            this.errorMessage += 'Invalid file name -'
          }
          this.errorMessage += ' check file is a .txt file'
      }
    } else {
      this.isValidFileUploaded.next(false)
      this.errorMessage = 'Error with file. Check you have uploaded the correct one'
    }
  }

  handleDigitInput(event: any) {
    console.log('new')


    console.log((this.isFileInputted.value) === false || (this.isManualIdValid.value) === true || (this.isFileSubmitted.value) )
    if (this.manualId.value === '' || this.manualId.errors?.['pattern']) {
      console.log('in if')
      this.isManualIdValid.next(false)
    } else {
      console.log('in else')
      this.isManualIdValid.next(true)
      console.log(this.isManualIdValid.value)
    }
  }

  onSubmit() {
    if (this.file) {
      console.log('this file')
      let fileName = this.file?.name;
      console.log(fileName)
      this.loading()

      if (this.validFile(fileName)) {
        console.log('valid')
        this.isFileSubmitted.next(true)

        const fr = new FileReader();
        fr.readAsArrayBuffer(this.file);
        fr.onload = f => {
          
          const url = this.GOOGLE_UPLOAD_FILE_SCRIPT;
          
          if (f.target?.result && (typeof f.target?.result != 'string') && this.file) {
            let generatedFileName = this.generateFileName(fileName)

            const qs = new URLSearchParams({filename: generatedFileName, mimeType: this.file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => {
              if (e["result"] === 'success') {
                this.successMessage = fileName + ' was successfully uploaded';
                this.errorMessage = ''
                this.loadingMessage = ''
                this.isFileUploaded.next(true);
                this.uploadIdService.setFileId(fileName)
              } else {
                this.successMessage = ''
                this.errorMessage = 'Error saving file - please try again'
                this.loadingMessage = ''
                this.isFileSubmitted.next(false)
                this.isFileUploaded.next(false)
                this.uploadIdService.setFileId('')
              }
            })
            .catch(err => { 
              this.errorMessage = err; 
              this.loadingMessage = '';
              this.successMessage = '';
              this.isFileSubmitted.next(false);
              this.isFileUploaded.next(false);
              this.uploadIdService.setFileId('');
              this.isValidFileUploaded.next(false)
            });
          }
        }
      }  else if (this.isManualIdValid.value) {
        this.isFileSubmitted.next(true)

        const fr = new FileReader();
        fr.readAsArrayBuffer(this.file);
        fr.onload = f => {
          
          const url = this.GOOGLE_UPLOAD_FILE_SCRIPT;
          
          if (f.target?.result && (typeof f.target?.result != 'string') && this.file) {
            const fn = "python-marker" + this.manualId.value + ".txt"
            let generatedFileName = this.generateFileName(fn)

            const qs = new URLSearchParams({filename: generatedFileName, mimeType: this.file.type});
            fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target?.result)])})
            .then(res => res.json())
            .then(e => {
              if (e["result"] === 'success') {
                this.successMessage = fileName + ' was successfully uploaded';
                this.errorMessage = ''
                this.loadingMessage = ''
                this.isFileUploaded.next(true);
                this.uploadIdService.setFileId(fileName)
              } else {
                this.successMessage = ''
                this.errorMessage = 'Error saving file - please try again'
                this.loadingMessage = ''
                this.isFileSubmitted.next(false)
                this.isFileUploaded.next(false)
                this.uploadIdService.setFileId('')
              }
            })
            .catch(err => { 
              this.errorMessage = err; 
              this.loadingMessage = '';
              this.successMessage = '';
              this.isFileSubmitted.next(false);
              this.isFileUploaded.next(false);
              this.uploadIdService.setFileId('');
              this.isValidFileUploaded.next(false)
            });
          }
        }


      }
      
      
      else {
        this.errorMessage = 'Invalid file upload, ensure you upload the txt file generated by the automated marker'
        this.successMessage = ''
        this.loadingMessage = ''
        this.uploadIdService.setFileId('')
      } 
    }
  }

  validFile(fileName: string) {
    if (fileName.startsWith('python-marker') && fileName.endsWith('.txt')) {
      let g = fileName
      g = g.replace('python-marker', '')
      g = g.replace('.txt', '')
      if (g.length == 6 && this.isOnlyDigits(g)) {
        this.askForId.next(false)
        return true
      } else {
        this.askForId.next(true)
        this.errorMessage = ''
        return false
      }
    }
    this.askForId.next(false)
    return false
  }

  isOnlyDigits(value: string) {
    return /^\d+$/.test(value);
}

  // Append a random value to the file name. This is so you can keep track of the last file submitted
  // for a specific Id
  generateFileName(fileName: string): string {
    let random_number = ("" + Math.random()).substring(2, 5)
    return fileName.slice(0, -4)+ "-" + random_number + ".txt"
  }

  loading() {
    this.errorMessage =  ''
    this.successMessage = ''
    this.loadingMessage = 'Loading...'
  }

  resetFileUpload() {
    this.fileUpload.reset();
    this.errorMessage = ''
    this.loadingMessage = ''
    this.successMessage = ''
    this.isFileInputted.next(false);
    this.isFileSubmitted.next(false);
    this.isFileUploaded.next(false);
    this.uploadIdService.setFileId('')
    this.isValidFileUploaded.next(false)
    this.askForId.next(false)
  }

}
