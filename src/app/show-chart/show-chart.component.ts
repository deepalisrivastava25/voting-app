import { MessagePiece } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs'
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.css']
})
export class ShowChartComponent implements OnInit {
  @Input() voteOptionsCounter : any; 
  public messageForSibling: any ='';
  clickEventsubscription!:Subscription;
  constructor(private commonService: CommonServiceService) { }
  message: any;
  votedOption: any;
  allOptions: any;
  showonXaxis: any;
  count: number = 0;

  ngOnInit(): void {

  }

  collectChartData(option: any, opt: any, options: any){
    this.votedOption = option;
    this.showonXaxis = options;
    this.allOptions = opt;
    this.countVotes(option, opt);
    this.commonService.subject
    .subscribe((data:any) => {     
      this.message = data;
    });
    const index = opt.indexOf(option);
    let voteOpt: any = [];
    this.commonService.numOptions
      .subscribe((data) =>{
        voteOpt = data ;
        voteOpt[index] += 1;
        var myChart = new Chart("myChart", {
          type: 'bar',
          data: {
              labels: this.allOptions,
              datasets: [{
                  label: '# of Votes',
                  data: voteOpt,
                  borderWidth: 1,
                  backgroundColor: this.getRandomColor(), 
              }]
          },
      });
      })

  }

  countVotes(option: any, opt: any){
   

    // for(let o of this.allOptions){
    //   //this.options.map(val => val.option);
    //   if (this.allOptions.find(a => a.title == str)){
    //     console.log("thanks");
    //     //o.count = this.count + 1;
    //   }
    // }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 
}
