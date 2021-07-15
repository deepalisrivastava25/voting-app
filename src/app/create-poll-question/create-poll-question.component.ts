import { Component, OnChanges, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-create-poll-question',
  templateUrl: './create-poll-question.component.html',
  styleUrls: ['./create-poll-question.component.css'],
})
export class CreatePollQuestionComponent implements OnInit, OnChanges {
  pollForm: FormGroup;
  currentItem: any;
  question: any;
  item: any;
  possibleAnswers: number = 0;
  count: boolean = false;
  voteOptionsCounter: Array<number> = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonServiceService
  ) {
    this.pollForm = this.fb.group({
      question: ['', [Validators.required, Validators.maxLength(80)]],
      options: this.fb.array([]),
    });
  }

  ngOnChanges(event) {
    console.log(event);
  }

  options(): FormArray {
    return this.pollForm.get('options') as FormArray;
  }

  newOption(): FormGroup {
    return this.fb.group({
      option: '',
    });
  }

  addOption() {
    this.options().push(this.newOption());
    this.getPossibleAns();
  }

  removeOption(i: number) {
    this.options().removeAt(i);
    this.getPossibleAns();
  }

  getPossibleAns() {
    this.possibleAnswers = this.options().value.filter(
      (val) => val.option.length > 0
    ).length;
  }

  ngOnInit(): void {}

  onSubmit(value: Object) {
    this.commonService.AClicked(value);
    this.commonService.changeOption(new Array(this.options().length).fill(0));
  }
  onOptionChange(event: any) {
    if (event.target.value > 0) {
      this.getPossibleAns();
    }
  }
  get f() {
    return this.pollForm.controls;
  }
}
