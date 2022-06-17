import React from "react";
import { nanoid } from "nanoid";
import { toJS } from "mobx";
import { observer } from 'mobx-react';
import { useQueryStore } from '../../stores/QueryStore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ResultsDisplay = observer(() => {
    const queryStore = useQueryStore();
    const { results } = queryStore.query;
    const latestResult = (results.length > 0) ? results[results.length - 1] : null;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Query</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { latestResult &&
                        Object.entries(latestResult).map(([propName, result]) => (
                            <Result
                                key={nanoid()}
                                result={result}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
});
  
export default ResultsDisplay;


const Result = observer(({result}) => {
    
    return( 
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {result.name}: 
            </TableCell>
            <TableCell align="right" backgroundColor='black'>
                {result.value}
            </TableCell>
        </TableRow>
    )
})