import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadIdService {

  private fileId = new BehaviorSubject<string>('');
  private isFileIdValid = new BehaviorSubject<boolean>(false);;

  setFileId(fileId: string) {
    this.fileId.next(fileId);
    this.isFileIdValid.next(this.isFileValid(fileId))
  }

  isFileValid(fileId: string) {
    return fileId.startsWith('python-marker') && fileId.endsWith('.txt')
  }

  getFileId(): Observable<string> { 
    return this.fileId.asObservable();
  }

  getIsFileValid(): Observable<boolean> {
    return this.isFileIdValid.asObservable();
  }

}
