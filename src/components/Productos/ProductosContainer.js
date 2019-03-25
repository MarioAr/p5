import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabla from './Productos';
// import { PROD_UPDATE } from '../../api/types';
import { fetchProductos } from '../../redux/actions/productos';
import { Progress } from '../utils/index';
import { fetchProductoDelete } from '../../redux/actions/productos';

class Productos extends Component {

    componentDidMount() {
        this.props.actualizar()
    }
    
    delete = id => {
        // console.log(`delete: ${id}`);
        let rta = window.confirm("Seguro que desea borrar?")
        if (rta) {
            // console.log('Borrar')
            this.props.borrar(id);
            
        } 
    }

    update = id => {
        // console.log(`update: ${id}`);
        this.props.history.push(`/productos/update/${id}`)
    }
    render() {
        // console.log(this.props)
        let { lista, loading, error, errorMsg, loadingB } = this.props;

        if (loading || loadingB) {
            return <Progress />
        }

        if (error) {
            return <div>
                <h1>Error: {errorMsg?errorMsg.message:null}</h1>
                <button onClick={()=>{this.props.actualizar()}}>Recargar</button>
            </div>
        }
        return (
            <div>
                <Tabla
                    lista={lista}
                    onDelete={this.delete}
                    onUpdate={this.update}
                    cargarAction={() => () => {this.props.history.push("/productos/create")}}
                    cargarMsg={"Cargar Producto"}
                />
            </div>
        )
    }
}

export default connect(
    state => state.productos,
    dispatch => ({
        borrar: id => dispatch(fetchProductoDelete(id)),
        // modificar: id => dispatch({type: PROD_UPDATE, payload: id}),
        actualizar: () => dispatch(fetchProductos()),
    })
)(Productos);