import React from 'react';
import { Bar} from 'react-chartjs-2';

function  BarChart(){
    const data = {
        labels: ['F6','F7','F8','F9','F10','F11','G6','G7','G8','G9','G10','G11'],
         datasets: [
            {
                label: 'G11',
                data: [23],
                backgroundColor: ['rgba(116, 6, 157, 0.6)'],
                borderColor: ['rgba(116, 6, 157, 0.6)'],
                barThickness: 10,
                              
               },
            {
                label: 'G6',
                data: [1,21,34,2],
                backgroundColor: ['rgba(0, 0, 121, 0.6)'],
                borderColor: ['rgba(0, 0, 121, 0.6)'],
                barThickness: 10,
                 }
                             
        ]
    }
    const options = {
        title:{
            display:true,
            text:'Critically Congested Areas'
        },
        

    }
    return < Bar type={'horizontalBar'} data={data} options={options}/>
}
export default  BarChart