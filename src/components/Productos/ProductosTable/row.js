import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

const Row = (props) => {
    
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {props.id}
            </TableCell>
            <TableCell align="left">{props.name}</TableCell>
            <TableCell align="left">{props.price}</TableCell>
            <TableCell align="left">{String(props.available)}</TableCell>
            <TableCell align="left">
                <IconButton  aria-label="Delete"
                onClick={() => props.onUpdate(props.id)}
                >
                    <UpdateIcon />
                </IconButton>
            </TableCell>
            <TableCell align="left">
                <IconButton aria-label="Delete"
                onClick={() => props.onDelete(props.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default Row;