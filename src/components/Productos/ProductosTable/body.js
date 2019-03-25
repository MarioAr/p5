import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import Row from './row';

const Body = props => {

    let { lista, onDelete, onUpdate } = props;
    
    
    return (
        <TableBody>
            {
                lista.map( (item, i) => {
                                        
                    return <Row key={i} {...item}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    />
                })
            }
        </TableBody>
    )
}

Body.propTypes = {
    lista: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Body;