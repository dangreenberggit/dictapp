import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { useQueryStore } from '../../stores/QueryStore';

const ChartSelector = observer(() => {
    const queryStore = useQueryStore();

    const handleSelect = (e) => {
        queryStore.chooseChart(e.target.name);
    };

    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleSelect} name='searchFirstLetter'>Words starting with letter</Button>
            <Button onClick={handleSelect} name='searchLastLetter'>Words ending with letter</Button>
            <Button onClick={handleSelect} name='searchLetterTotal'>Appearances of letter</Button>
            <Button onClick={handleSelect} name='searchLetterRepeats'>Consecutive appearances of letter</Button>
        </ButtonGroup>
    );
});

export default ChartSelector;