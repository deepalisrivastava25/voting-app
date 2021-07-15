import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  messageSource = new BehaviorSubject('');
  numOptions = new BehaviorSubject([]);
  voteOptions = this.numOptions.asObservable();
  currentMessage = this.messageSource.asObservable();
  @Output() formToEmit = new EventEmitter<Object>();
  public subject = new BehaviorSubject(false);

  constructor() {}

  AClicked(msg: Object) {
    this.formToEmit.emit(msg);
  }

  changeOption(options: any) {
    this.numOptions.next(options);
  }

  changeMessage(question: any) {
    this.subject.next(question);
  }

  sendClickEvent() {
    this.subject.next(!this.subject.getValue());
  }

  getClickEvent(): Observable<any> {
    return this.subject;
  }
}
