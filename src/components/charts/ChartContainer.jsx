import { observer } from 'mobx-react';
import Chart from './Chart';
import ChartSelector from './ChartSelector';
import { useQueryStore } from '../../stores/QueryStore';

const ChartContainer = () => {
  const queryStore = useQueryStore();
  const { chartChoice } = queryStore.query;

  return (
    <div style={{maxHeight:'600px'}}>
      <ChartSelector />
      <Chart chartChoice={chartChoice.name}/>
    </div>
  )
};

export default observer(ChartContainer);