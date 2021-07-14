import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatePollQuestionComponent } from './create-poll-question/create-poll-question.component';
import { PollComponent } from './poll/poll.component';
import { ChartsModule } from 'ng2-charts';
import { ShowChartComponent } from './show-chart/show-chart.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: CreatePollQuestionComponent },
  { path: 'poll', component: PollComponent },
  { path: 'show-chart', component: ShowChartComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePollQuestionComponent,
    PollComponent,
    ShowChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatRadioModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
