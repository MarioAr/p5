import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabla from '../Table/Table';
// import Row from './row';
import Body from './ProductosTable/body';
import Button from '@material-ui/core/Button';

const headers = [
    'ID',
    'name',
    'price',
    'description',
    'category',
    'Available',
    'Modificar',
    'Borrar'
]
class Productos extends Component {


    render() {
        let { lista, onDelete, onUpdate } = this.props;
        
        let body = Body({lista, onDelete, onUpdate})
        return (
            <div>
                <div>
                    <h3>Productos</h3>
                    <Button color="inherit"
                    onClick={this.props.cargarAction()}
                    >
                        {this.props.cargarMsg}
                    </Button>
                </div>
                <Tabla
                    headers={headers}
                    body={body}
                />
            </div>
        )
    }
}

Productos.propTypes = {
    lista: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Productos;