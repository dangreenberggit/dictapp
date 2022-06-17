import { observable, action, toJS } from 'mobx';
import { createContext, useContext } from 'react';
import { runSearch } from '../lib/api';

class QueryStore {
    query = observable({
        options: [],
        letter: '',
        results: [],
        chartChoice: {
            name: 'searchFirstLetter',
            title: 'Awaiting Results'
        },
    })

    addOption = action((option) => {
        const { options } = this.query;
        if(options.includes(option)) return;
        else {
            options.push(option);
        }
    })

    removeOption = action((option) => {
        let { options } = this.query;
        options = options.filter((element) => element !== option)
    })

    changeLetter = action((input) => {
        this.query.letter = input.slice(-1).toUpperCase();
    })

    submitQuery = action(() => {
        const { options: optionsArray, letter } = toJS(this.query)
        if(letter===''){
            return
        }
        const result = runSearch(optionsArray, letter);
        this.query.results.push(result)
        console.log('store results', result)
    })


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
    })
}

export const QueryStoreContext = createContext(new QueryStore());
export const useQueryStore = () => useContext(QueryStoreContext);
export const QueryStoreProvider = ({ children }) => {
    return (
        <QueryStoreContext.Provider value={QueryStore}>{children}</QueryStoreContext.Provider>
    )
}