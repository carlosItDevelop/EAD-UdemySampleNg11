import {Component, OnInit, Input, Inject, ViewEncapsulation} from '@angular/core';
import {D3, D3ChartService} from "../../../core/nvD3/nvD3.service";
import {lineChartDemoValues} from "../../../data/widgetDemoData.data";

@Component({
  selector: 'ms-line-chart',
  templateUrl: './line-chart.component.html',
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnInit {

  @Input('data') data: any;
  @Input('chartOptions') chartOptions: any;

  d3: D3;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('bgColor') bgColor: string;
  @Input('textColor') textColor: string;
  @Input('chartColor') chartColor: string;
  @Input('interpolate') interpolate: boolean = false;


  constructor(@Inject(D3ChartService) d3ChartService: D3ChartService) {
    this.d3 = d3ChartService.getD3();
  }

  ngOnInit() {
    let d3 = this.d3;

    let interpolate = (this.interpolate) ? 'cardinal' : false;

    let min = d3.min(lineChartDemoValues) - 40;
    let max = d3.max(lineChartDemoValues) + 40;

    if (!this.chartOptions) {
      this.chartOptions = {
        chart: {
          type: 'lineChart',
          height: 200,
          margin : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          x: (d) => { return d.date; },
          y: (d) => { return d.value; },
          showXAxis: false,
          showYAxis: false,
          xAxis: {
            ticks: d3.timeDay,
            axisLabel: '',
            tickFormat: (d) => {
              return d3.timeFormat('%a %d.%m.%Y')(new Date(d));
            }
          },
          yDomain: [min, max],
          showLegend: false,
          useInteractiveGuideline: true,
          color: [this.chartColor],
          interpolate: interpolate
        },
      };
    }
  }
}