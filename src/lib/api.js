import dictFile from './words_dictionary.json';


const searchFirstLetter = (letter) => {
    let counter = 0;
    const words = Object.keys(dictFile)
    words.forEach((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        if(firstLetter === letter) {
            counter++;
        }
    })
    return counter;
}

const searchLastLetter = (letter) => {
    let counter = 0;
    const words = Object.keys(dictFile)
    words.forEach((word) => {
        const lastLetter = word.charAt(word.length-1).toUpperCase();
        if(lastLetter === letter) {
            counter++;
        }
    })
    return counter;
}

const searchLetterTotal = (letter) => {
    let counter = 0;
    const words = Object.keys(dictFile)
    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            if(word[i].toUpperCase()===letter){
                counter++;
            }
        }
    })
    return counter;
}

const searchLetterRepeats = (letter) => {
    let counter = 0;
    const words = Object.keys(dictFile);
    words.forEach((word) => {
        for (let i = 0; i < word.length-1; i++) {
            const letterOne = word[i].toUpperCase();
            const letterTwo = word[i+1].toUpperCase();
            if(
                letterOne===letterTwo
                &&
                letterOne === letter
            ){
                counter++;
            }
        }
    })
    return counter;
}

export const runSearch = (options, letter) => {
    let results = {
        letter: {
            name: 'Letter',
            value: letter
        }
    };
    if(options.includes('searchFirstLetter')) {
        results.searchFirstLetter = {
            name: `Words starting with letter`,
            value: searchFirstLetter(letter),
        }
    }
    if(options.includes('searchLastLetter')) {
        results.searchLastLetter = {
            name: `Words ending with letter`,
            value: searchLastLetter(letter),
        }
    }
    if(options.includes('searchLetterTotal')) {
        results.searchLetterTotal = {
            name: `Appearances of letter`,
            value: searchLetterTotal(letter),
        }
    }
    if(options.includes('searchLetterRepeats')) {
        results.searchLetterRepeats = {
            name: `Consecutive appearances of letter`,
            value: searchLetterRepeats(letter),
        }
    }
    return results;
}