import './QueriesForm.css';
import React from "react";
import { observer } from 'mobx-react';
import { FormGroup } from '@mui/material';
import QueryChoices from './QueryChoices';
import QueryLetterInput from './QueryLetterInput';
import SubmitButton from './SubmitButton';

const QueriesForm = observer(() => {

    return (
        <div className="query-form-wrapper">
            <FormGroup>
                <QueryChoices />
                <QueryLetterInput />
            </FormGroup>
           <SubmitButton />
        </div>
    );
});
  
export default QueriesForm;
  