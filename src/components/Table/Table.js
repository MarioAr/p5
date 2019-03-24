import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableFooter from '@material-ui/core/TableFooter';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



function SimpleTable(props) {
  const { classes, headers, body } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              headers.map( (item, i) => {

                return (
                  <TableCell key={i}>
                      {item}
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        {body}
        
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(styles)(SimpleTable);
