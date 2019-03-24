import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './ProductosForm';
import { fetchProducto, fetchProductoUpdate, fetchProductoInsert } from '../../redux/actions/productos';
import { Spinner } from '../utils/index';

class ProductosFormC extends Component {

    action = (o) => {
        let { id } = this.props.match.params
        
        if (id) {
            this.props.updateProducto(o)
            
        } else {
            this.props.insertProducto(o);
        }
    }
    componentDidMount() {
        
        this.modificar = false;
        let { id } = this.props.match.params
        
        if (id) {
            this.props.getProducto(id)
        }
    }
    render() {
        let { loading, error, uno } = this.props;
        if (this.props.match.params.id) {
            this.modificar = true;
        } else {
            uno = {}
        }
        
        if (loading) {
            return <Spinner />
        }
        return (
            <Form 
                onGoback={this.props.history.goBack}
                onAction={this.action}
                error={error}
                {...uno}
            />
        )
    }
}


export default connect(
    state => state.productos,
    dispatch => ({
        getProducto: id => dispatch(fetchProducto(id)),
        insertProducto: o => dispatch(fetchProductoInsert(o)),
        updateProducto: o => dispatch(fetchProductoUpdate(o)),
    })
)(ProductosFormC)