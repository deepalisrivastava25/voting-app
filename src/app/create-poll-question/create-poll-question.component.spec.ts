import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePollQuestionComponent } from './create-poll-question.component';

describe('CreatePollQuestionComponent', () => {
  let component: CreatePollQuestionComponent;
  let fixture: ComponentFixture<CreatePollQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePollQuestionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePollQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
