import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  public graph1;
  public graph2;

  ngOnInit(): void {
     this.graph1 = {
       data : [{
        values: [55, 26, 19],
        labels: ['Grammatical', 'Puntuation', 'prononciation'],
        type: 'pie'
      }],
      
      layout : {
        title: 'Errors Analysis'
      }
  };

  this.graph2 = {
    data:[
      {
        x: ['2021-04-09 14:23:00', '2021-04-09 16:00:00', '2021-04-09 16:43:00','2021-04-09 17:23:00'],
        y: [8, 6, 7, 1],
        type: 'scatter',
        line:{color: "red", width: 3}
        
      }
    ],
    layout: { title: 'Improvement of Errors Analysis'}
};
  }

}
