import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { CreatePollQuestionComponent } from '../create-poll-question/create-poll-question.component';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';
import { ShowChartComponent } from '../show-chart/show-chart.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
export interface FormCategory {
  question?: string;
  option?: [];
}
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})
export class PollComponent implements OnInit {
  showChartCompObj = new ShowChartComponent(this.commonService);
  test: any;
  @Output() onVariantChange = new EventEmitter();
  changeLog: string[] = [];
  formData!: any;
  question!: string;
  displayQues: any;
  opt: any = [];
  showOptions: boolean = false;
  options: Array<any> = [];
  option: any = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private commonService: CommonServiceService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  receivedFormData: FormCategory = {};

  ngOnInit(): void {
    this.showOptions = false;
    this.commonService.formToEmit.subscribe((data: object) => {
      this.formData = data;
      this.question = this.formData.question;
      if (this.formData.options.length > 0) {
        this.showOptions = true;
        this.options = this.formData.options;
      }
      this.opt = this.options.map((val) => val.option);
    });
  }
  //   getFormData(formData: object) {
  //     this.receivedFormData = formData;
  // }

  vote(option: any, opt: any, options: any) {
    console.log(option);
    this.openSnackBar();
    this.showChartCompObj.collectChartData(option, opt, options);
  }

  openSnackBar() {
    this.snackBar.open('You have voted!!', 'Thanks', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
  }
  save() {
    console.log('charts page');
  }
}
