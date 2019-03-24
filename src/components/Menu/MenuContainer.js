import React from 'react';
// import PropTypes from 'prop-types';
import MenuBar from './Menu';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Menu extends React.Component {


    render() {
        return (
            <MenuBar>
                <Button color="inherit"
                onClick={() => {this.props.history.push("/productos")}}
                >
                    Productos
                </Button>
                <Button color="inherit"
                onClick={() => {this.props.history.push("/categorias")}}
                >
                    Categorias
                </Button>
                {/* <Button color="inherit"
                onClick={() => {this.props.history.push("/ererer")}}
                >
                    Error
                </Button> */}
            </MenuBar>
        )
    }
}

export default withRouter(Menu);