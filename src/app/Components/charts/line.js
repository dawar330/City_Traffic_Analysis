import React from 'react';
import {Line} from 'react-chartjs-2';

function LineChart(){
    const data = {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
         datasets: [
             {
            label: 'G11',
            fill: false,
             data: [32,62,21,23,33,32,62,21,23,33,32,62,21,23,33,32,62,21,23,33,32],
            backgroundColor: ['rgba(255,206,86,0.2)'],
			borderColor: ['rgba(255,206,86,0.2)'],
            pointBackgroundColor: ['rgba(255,206,86,0.2)'],
            pointBorderColor:['rgba(255,206,86,0.2)']
             },
             {
            label: 'G6',
            fill: false,
            data: [41,25,36,46,35],
            backgroundColor: ['rgba(116, 6, 157, 0.6)'],
			borderColor: ['rgba(116, 6, 157, 0.6)'],
            pointBackgroundColor: ['rgba(116, 6, 157, 0.6)'],
            pointBorderColor:['rgba(116, 6, 157, 0.6)']
             }
             ,
             {
            label: 'G7',
            fill: false,
            data: [61,55,44,53,28],
            backgroundColor: ['rgba(255, 6, 157, 0.6)'],
			borderColor: ['rgba(255, 6, 157, 0.6)'],
            pointBackgroundColor: ['rgba(255, 6, 157, 0.6)'],
            pointBorderColor:['rgba(255, 6, 157, 0.6)']
             }    ,
             {
            label: 'G9',
            fill: false,
            data: [12,22,33,48,18,12,3,34,5,2,45,6,64,24,4,32,23,1],
            backgroundColor: ['rgba(112, 121, 121, 0.2)'],
			borderColor: ['rgba(112, 121, 121, 0.2)'],
            pointBackgroundColor: ['rgba(112, 121, 121, 0.2)'],
            pointBorderColor:['rgba(112, 121, 121, 0.2)']
             },
             {
            label: 'G10',
            fill: false,
            data: [33,32,11,51,41],
            backgroundColor: ['rgba(0, 0, 121, 0.6)'],
			borderColor: ['rgba(0, 0, 121, 0.6)'],
            pointBackgroundColor: ['rgba(0, 0, 121, 0.6)'],
            pointBorderColor:['rgba(0, 0, 121, 0.6)']
             },
             {
            label: 'G8',
            fill: false,
            data: [12,52,11,33,43],
            backgroundColor: ['rgba(105, 213, 0, 0.6)'],
			borderColor: ['rgba(105, 213, 0, 0.6)'],
            pointBackgroundColor: ['rgba(105, 213, 0, 0.6)'],
            pointBorderColor:['rgba(105, 213, 0, 0.6)']
             }              
        ]
    }
    const options = {
        title:{
            display:true,
            text:'Time/Congestion graph of mostly congested areas'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:100,
                        stepSize: 10
                    }
                }
            ]
        }

    }
    return <Line data={data} options={options}/>
}
export default LineChart