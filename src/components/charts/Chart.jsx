import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { observer } from 'mobx-react';
import { useQueryStore } from '../../stores/QueryStore';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({chartChoice}) => {
  const queryStore = useQueryStore();
  const { results } = queryStore.query;

  const labels = []
  const resultsData = []

  const field = chartChoice;
  results.forEach(result => {
    if(result[field]) {
      labels.push(result.letter.value);
      resultsData.push(result[field].value);
    } 
  })

  const bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];
  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: chartChoice,
        data: resultsData,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      height="350px"
      width="350px"
      options={{ maintainAspectRatio: false }}
    />
  )
};


export default observer(Chart);