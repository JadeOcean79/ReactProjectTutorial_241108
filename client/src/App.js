import React, { Component} from 'react';
import './App.css';
import Customer from './componenets/Customer'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled, withStyles } from '@mui/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    display: 'block'
  },
  table: {
    minWidth: 1080
  }
})


// const Root = styled('div')(({ theme }) => ({
//   width: '100%',
//   marginTop: theme.spacing(3),
//   overflowX: 'auto',
// }));

// const styledTable = styled(Table)(({ theme }) => ({
//   minWidth: 1080,
// }));


const customers = [{
  'id':1,
  'image':  `https://picsum.photos/100?random=${Math.random()}`,
  'name': '홍길동',
  'birthday':'791227',
  'gender': '남자',
  'job': '대학생',
},
{
  'id':2,
  'image': `https://picsum.photos/100?random=${Math.random()}`,
  'name': '이순신',
  'birthday':'781227',
  'gender': '남자',
  'job': '프로그래머',
},
{
  'id':3,
  'image': `https://picsum.photos/100?random=${Math.random()}`,
  'name': '유관순',
  'birthday':'331227',
  'gender': '여자',
  'job': '디자이너',
}
]


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Job</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styled)(App);
