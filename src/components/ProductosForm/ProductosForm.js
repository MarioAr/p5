import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  container: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {

  getDisabled = state => {
    if (!state) return true;
    if(!state.name || !state.price) return true;

    return false;
  }
  handleChange = name => event => {
      // console.log(this.state)
    this.setState({ [name]: event.target.value });
    // console.log(this.state)
  };

  handleChangeAvailable = () => event => {
    this.setState({ available: !!event.target.checked });
  };

  componentDidMount()  {
    
    let { available, name, price } = this.props;  
    this.setState({available, name, price})
  }
  
  render() {
    const { classes, name,error } = this.props;

    let available = this.state?this.state.available:false;
    return (
        <FormControl component="fieldset" className={classes.formControl}>
      <form className={classes.container} noValidate autoComplete="off">
        <FormGroup>
            <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            // value={this.state.name}
            defaultValue={name}
            onChange={this.handleChange('name')}
            margin="normal"
            />
        </FormGroup>
        <FormGroup>
            <TextField
            id="standard-name"
            label="Price"
            className={classes.textField}
            // value={this.state.price}
            onChange={this.handleChange('price')}
            margin="normal"
            type="number"
            defaultValue={this.props.price}
            />
        </FormGroup>
        {/* <FormGroup>
            <TextField
            type="textfield"
            id="standard-name"
            label="Description"
            className={classes.textField}
            defaultValue={this.props.description}
            onChange={this.handleChange('description')}
            margin="normal"
            />
        </FormGroup>    */}
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch
                      checked={available}
                      onChange={this.handleChangeAvailable()}
                      defaultValue={available}
                      color="primary"                      
                    />
                }
                label={this.props.available?'Available':'Not Available'}
            />
        </FormGroup>
        {/* <TextField
          id="standard-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
        /> */}
        <FormGroup>
            <Button color="inherit"
                disabled={this.getDisabled(this.state)}
                onClick={() => this.props.onAction(this.state)}
                >
                    Aceptar
            </Button>
            <Button color="inherit"
                onClick={this.props.onGoback}
                >
                    Volver
            </Button>
        </FormGroup>
        {error && <FormGroup>
          <div>Error!</div>
        </FormGroup>}
      </form>
      </FormControl>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};
TextFields.defaultProps = {
    name: '',
    price: '',
    available: false
}

export default withStyles(styles)(TextFields);
