import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
  },
  content: {
    margin: "60px",
  },
  table: {
    margin: "0px 60px",
  },
  textField: {
    marginRight: "10px",
  },
  subContent: { 
    marginTop: "30px",
  },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('Alice', 'Bob', 'hello'),
    createData('Eve', 'Roger', 'morning'),
  ];

export default function Home() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                Forum
            </Typography>
            </Container>
        </div>
        <div className={classes.table}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Sent by</TableCell>
                        <TableCell align="left">Recieved by</TableCell>
                        <TableCell align="left">Message</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className={classes.content}>
            <form noValidate autoComplete="off">
                <TextField className={classes.textField} id="outlined-basic" label="Username" variant="outlined" />
                <TextField className={classes.textField} id="outlined-basic" label="Message" variant="outlined" />
            </form>
            <Button className={classes.subContent} variant="contained" color="primary">
                Send
            </Button>
        </div>
    </div>
  );
}