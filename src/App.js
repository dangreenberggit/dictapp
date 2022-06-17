import './App.css';
import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@mui/material'
import QueriesForm from './components/queries/QueriesForm';
import ResultsDisplay from './components/results/ResultsDisplay';
import ChartContainer from './components/charts/ChartContainer';

const App = observer(() => {

  return (
    <div className="App">
      <header className="App-header">
        Daniel's Dictionary App
      </header>
      <Grid
            container
            direction="column"
            spacing={2}
          >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={3} md={4}>
              <QueriesForm />
            </Grid>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={3} md={4}>
              <ResultsDisplay/>
            </Grid>
          </Grid>
          <Grid>
            <ChartContainer />
          </Grid>
      </Grid>
    </div>
  );
});

export default App;
