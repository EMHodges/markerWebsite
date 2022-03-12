import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { UploadIdService } from '../upload/upload-id.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnDestroy {

  private GOOGLE_QUESTIONNAIRE_SCRIPT = "https://script.google.com/macros/s/AKfycbwOsT62Fd6pmu4VB_82b1Xx_9JIuxRPl336uKM0fIoaajE0lRhlO7IVeA9odGW89d7H/exec"
  private ngUnsubscribe = new Subject();

  validFileNotSubmitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);;
  isFileIdValid: Observable<boolean>;
  
  id = new FormControl('', Validators.required)
  fileId = '';

  text_form = new FormGroup({
    changed: new FormControl(''),
    comments: new FormControl('')
  })

  form = new FormGroup({
    use_frequently: new FormControl(''),
    complex: new FormControl(''),
    easy: new FormControl(''),
    technical_support: new FormControl(''),
    integrated: new FormControl(''),
    inconsistency: new FormControl(''),
    imagine: new FormControl(''),
    cumbersome: new FormControl(''),
    confident: new FormControl(''),
    learn: new FormControl(''),
    error: new FormControl(''),
    interface: new FormControl(''),
    capabilities: new FormControl(''),
    satisfied: new FormControl(''),
  })

  option: {[key: string]: string} = {
    use_frequently: 'I think that I would like to use this system frequently',
    complex: 'I found the system unnecessarily complex',
    easy: 'I though the system was easy to use',
    technical_support: 'I think I would need the support of a technical person to be able to use this system',
    integrated: 'I found the various functions in this system were well integrated',
    inconsistency: 'I thought there was too much inconsistency in the system',
    imagine: 'I would imagine that most people would learn to use this system very quickly',
    cumbersome: 'I found the system very cumbersome to use',
    confident: 'I felt very confident using the system',
    learn: 'I needed to learn a lot of things before I could get going with this system.',
    error: 'The system gave error messages that clearly told me how to fix problems',
    interface: 'I liked using the interface of this system',
    capabilities: 'The system has all the functions and capabilities I expect it to have',
    satisfied: 'Overall, I am satisfied with the system',
    changed: 'What would you change/add to the tool?',
    comments: 'Any other comments?'
  }

  constructor(private uploadIdService: UploadIdService, private http: HttpClient) {
    this.uploadIdService.getFileId()
      .pipe(takeUntil(this.ngUnsubscribe))
      .pipe()
      .subscribe(fileId => this.fileId = fileId)
    this.isFileIdValid = this.uploadIdService.getIsFileValid()
   }

  submitQuestionnaire() {
    var formData: FormData = new FormData();

    Object.keys(this.form.value).forEach(key => {
      formData.append(key, this.form.get(key)?.value)
    })
    formData.append("id", this.id.value)

    this.http.post(this.GOOGLE_QUESTIONNAIRE_SCRIPT, formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next(undefined);
    this.ngUnsubscribe.complete();
  }

  isValidFileId() {
    console.log(this.fileId === '')
    return this.fileId === ''
  }

}
