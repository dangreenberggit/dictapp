import React from 'react';
import { observer } from 'mobx-react';
import { TextField } from '@mui/material';
import { useQueryStore } from '../../stores/QueryStore';

const QueryLetterInput = observer(() => {
  const queryStore = useQueryStore();
  const { letter } = queryStore;

  const handleChange = (e) => {
    queryStore.changeLetter(e.target.value);
  };

  return (
    <TextField
      sx={{ width: 100 }}
      id="query-letter-choice"
      required={true}
      label="Letter"
      type="text  "
      value={letter}
      onChange={handleChange}
    />
  );
});

export default QueryLetterInput;
