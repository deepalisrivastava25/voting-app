import { MessagePiece } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.css'],
})
export class ShowChartComponent implements OnInit {
  @Input() voteOptionsCounter: any;
  public messageForSibling: any = '';
  clickEventsubscription!: Subscription;
  constructor(private commonService: CommonServiceService) {}
  message: any;
  votedOption: any;
  totalVotes: number = 0;
  allOptions: any;
  showonXaxis: any;
  count: number = 0;

  ngOnInit(): void {}

  collectChartData(option: any, opt: any, options: any) {
    this.votedOption = option;
    this.showonXaxis = options;
    this.allOptions = opt;
    this.commonService.subject.subscribe((data: any) => {
      this.message = data;
    });
    const index = opt.indexOf(option);
    let voteOpt: any = [];
    this.commonService.numOptions.subscribe((data) => {
      voteOpt = data;
      voteOpt[index] += 1;
      this.totalVotes = voteOpt.reduce(function (acc, cur) {
        return acc + cur;
      });
      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.allOptions,
          datasets: [
            {
              label: 'Total Votes:' + this.totalVotes,
              data: voteOpt,
              backgroundColor: '#26be25',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    });
  }
}
