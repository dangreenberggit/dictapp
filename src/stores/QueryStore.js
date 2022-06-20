import { observable, action, toJS, makeAutoObservable, runInAction } from 'mobx';
import { createContext, useContext } from 'react';
import { runSearch, searchFirstLetter } from '../lib/api';

class QueryStore {
  letter = '';
  showChartFor = {
    searchFirstLetter: false,
    searchLastLetter: false,
    searchLetterTotal: false,
    searchLetterRepeats: false,
  };
  query = observable({
    options: [],

    results: [],
    chartChoice: {
      name: 'searchFirstLetter',
      title: 'Awaiting Results',
    },
  });

  toggleChartVisibility = (key) => () => {
    runInAction(() => {
      console.log('arst', this.showChartFor);
      this.showChartFor[key] = !this.showChartFor[key];
    });
  };

  constructor() {
    makeAutoObservable(this);
  }

  //   get letter() {
  //     return this.query.letter;
  //   }

  get startsWith() {
    if (!this.letter) {
      return 0;
    }
    return searchFirstLetter(this.letter);
  }

  addOption = action((option) => {
    const { options } = this.query;
    if (options.includes(option)) return;
    else {
      options.push(option);
    }
  });

  removeOption = action((option) => {
    let { options } = this.query;
    options = options.filter((element) => element !== option);
  });

  changeLetter = (input) => {
    this.letter = input.slice(-1).toUpperCase();
  };

  submitQuery = action(() => {
    const { options: optionsArray } = toJS(this.query);

    const result = runSearch(optionsArray, this.letter);
    this.query.results.push(result);
    console.log('store results', result);
  });

  chooseChart = action((option) => {
    const { chartChoice } = this.query;
    chartChoice.name = option;

    switch (option) {
      case 'searchFirstLetter':
        chartChoice.title = 'Words starting with letter';
        break;
      case 'searchLastLetter':
        chartChoice.title = 'Words ending with letter';
        break;
      case 'searchLetterTotal':
        chartChoice.title = 'Appearances of letter';
        break;
      case 'searchLetterRepeats':
        chartChoice.title = 'Consecutive appearances of letter';
        break;
    }
  });
}

export const QueryStoreContext = createContext(new QueryStore());
export const useQueryStore = () => useContext(QueryStoreContext);
export const QueryStoreProvider = ({ children }) => {
  return <QueryStoreContext.Provider value={QueryStore}>{children}</QueryStoreContext.Provider>;
};
