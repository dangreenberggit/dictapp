import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useQueryStore } from '../../stores/QueryStore';

const QueryChoices = observer(() => {
    const choices = [
        {
            name: "searchFirstLetter",
            label: "Count words that start with letter",
        },
        {
            name: "searchLastLetter",
            label: "Count words that end with letter",
        },
        {
            name: "searchLetterTotal",
            label: "Count occurences of letter",
        },
        {
            name: "searchLetterRepeats",
            label: "Count words that consecutively repeat a letter",
        },
    ]


    return (
        <FormGroup>
            {
                choices.map(({ label, name }, index) => {
                    return (
                        <FormControlLabel
                            key={nanoid()}
                            control={<ControlledCheckbox name={name} />}
                            label={label}
                        />
                    )
                })
            }
        </FormGroup>
    )
});

export default QueryChoices;

const ControlledCheckbox = observer(({name}) => {
    const queryStore = useQueryStore();

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        if(e.target.checked){
            queryStore.addOption(e.target.name);
            setChecked(true);
        }else{
            queryStore.removeOption(e.target.name);
            setChecked(false);
        }
    };

    return (
        <Checkbox
            name={name}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
});