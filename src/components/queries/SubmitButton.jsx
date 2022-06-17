import { Button } from '@mui/material';
import React from "react";
import { observer } from 'mobx-react';
import { useQueryStore } from '../../stores/QueryStore';

const SubmitButton = observer(() => {
    const queryStore = useQueryStore();

    const handleSubmit = () => {
        queryStore.submitQuery();
    };

    return (
        <Button
            sx={{ width: 150 }}
            variant="contained"
            onClick={handleSubmit}
        >
            Submit
        </Button>
    );
});
  
export default SubmitButton;