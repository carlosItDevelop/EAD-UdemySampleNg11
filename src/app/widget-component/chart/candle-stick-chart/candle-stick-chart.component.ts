import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-candle-stick-chart',
  templateUrl: './candle-stick-chart.component.html',
  styleUrls: ['./candle-stick-chart.component.scss']
})
export class CandleStickChartComponent implements OnInit {

	chartOptions = {
    	tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            }
        },
	   dataZoom: [
	        {
	            type: 'inside',
	            start: 10,
	            end: 100
	        },
	        {
	            show : true,
	            type: 'slider',
	            realtime: true,
	            start: 20,
	            end: 70,
	            top: 10,
	            height: 30,
	            onGap:true,
	            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
	            handleSize: '120%'
	        }
	    ],
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : true,
	            axisTick: {onGap:true},
	            splitLine: {show:false},
	            data : [
	                "2018/1/24", "2018/1/25", "2018/1/28", "2018/1/29", "2018/1/30",
	                "2018/1/31", "2018/2/1", "2018/2/4", "2018/2/5", "2018/2/6", 
	                "2018/2/7", "2018/2/8", "2018/2/18", "2018/2/19", "2018/2/20", 
	                "2018/2/21", "2018/2/22", "2018/2/25", "2018/2/26", "2018/2/27", 
	                "2018/2/28", "2018/3/1", "2018/3/4", "2018/3/5", "2018/3/6", 
	                "2018/3/7", "2018/3/8", "2018/3/11", "2018/3/12", "2018/3/13", 
	                "2018/3/14", "2018/3/15", "2018/3/18", "2018/3/19", "2018/3/20", 
	                "2018/3/21", "2018/3/22"
	            ]
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale:true,
	            boundaryGap: [0.01, 0.01]
	        }
	    ],
	    series : [
	        {
	            type:'k',
	            name : 'Chart',
	            itemStyle: {
	                normal: {
	                    color: '#1565c0',
	                    color0: '#43a047',
	                    borderColor: '#1565c0',
               			borderColor0: '#43a047'
	                }
            	},
	            data:[
	                [2320.26,2302.6,2287.3,2362.94],
	                [2300,2291.3,2288.26,2308.38],
	                [2295.35,2346.5,2295.35,2346.92],
	                [2347.22,2358.98,2337.35,2363.8],
	                [2360.75,2382.48,2347.89,2383.76],
	                [2383.43,2385.42,2371.23,2391.82],
	                [2377.41,2419.02,2369.57,2421.15],
	                [2425.92,2428.15,2417.58,2440.38],
	                [2411,2433.13,2403.3,2437.42],
	                [2432.68,2434.48,2427.7,2441.73],
	                [2430.69,2418.53,2394.22,2433.89],
	                [2416.62,2432.4,2414.4,2443.03],
	                [2441.91,2421.56,2415.43,2444.8],
	                [2420.26,2382.91,2373.53,2427.07],
	                [2383.49,2397.18,2370.61,2397.94],
	                [2378.82,2325.95,2309.17,2378.82],
	                [2322.94,2314.16,2308.76,2330.88],
	                [2320.62,2325.82,2315.01,2338.78],
	                [2313.74,2293.34,2289.89,2340.71],
	                [2297.77,2313.22,2292.03,2324.63],
	                [2322.32,2365.59,2308.92,2366.16],
	                [2364.54,2359.51,2330.86,2369.65],
	                [2332.08,2273.4,2259.25,2333.54],
	                [2274.81,2326.31,2270.1,2328.14],
	                [2333.61,2347.18,2321.6,2351.44],
	                [2340.44,2324.29,2304.27,2352.02],
	                [2326.42,2318.61,2314.59,2333.67],
	                [2314.68,2310.59,2296.58,2320.96],
	                [2309.16,2286.6,2264.83,2333.29],
	                [2282.17,2263.97,2253.25,2286.33],
	                [2255.77,2270.28,2253.31,2276.22],
	                [2269.31,2278.4,2250,2312.08],
	                [2267.29,2240.02,2239.21,2276.05],
	                [2244.26,2257.43,2232.02,2261.31],
	                [2257.74,2317.37,2257.42,2317.86],
	                [2318.21,2324.24,2311.6,2330.81],
	                [2321.4,2328.28,2314.97,2332],
	                [2334.74,2326.72,2319.91,2344.89]
	            ]
	        }
	    ]
	};                 

	constructor() { }

	ngOnInit() {
	}

}
