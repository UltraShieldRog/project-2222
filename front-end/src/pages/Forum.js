import React, { useState } from 'react';
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

const defaultRows = [
    createData('Alice@gmail.com', 'Bob@gmail.com', 'hello'),
    createData('Eve@gmail.com', 'Roger@gmail.com', 'morning'),
  ];

export default function Forum() {
  const classes = useStyles();

  const [messagingTable, setMessagingTable] = useState(defaultRows);
  const [send, setSend] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    let from = localStorage.getItem("username")
    if (from == null){
      from = "USERNAME"
    }
    let to = send;
    let m = message;
    let valid = true;
    let entries = [from, to, m]
    let banned = ["ADMIN", "<", ">", "SCRIPT", "AND", "OR", "SELECT", "UPDATE", "TABLE", "BETWEEN", "CREATE", "DELETE", "GRANT", "EXISTS", "WHERE", ";", ":", "'", "\"", "SUSPICIOUS", "EMAIL", "USERNAME", "DROP"];
    for (var index = 0; index < banned.length; ++index) {
      for (var j = 0; j < entries.length; ++j){
        if (entries[j].toUpperCase().includes(banned[index])){
          valid = false;
          break;
        }
      }
    }
    if (!entries[0].toUpperCase().includes('@') || !entries[1].toUpperCase().includes('@')){
      valid = false;
    }
    if (valid){
      setMessagingTable(messagingTable.concat(createData(from, to, m)))
    } else {
      window.alert("Invalid characters detected in the submission. \nPlease send another message using a valid account.")
    }
  }

  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                Forum
            </Typography>
            </Container>
        </div>
        <div className={classes.content}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.textField} id="outlined-basic" label="Send to" variant="outlined" onInput={ e=>setSend(e.target.value)}/>
                <TextField className={classes.textField} id="outlined-basic" label="Message" variant="outlined" onInput={ e=>setMessage(e.target.value)}/>
            <Button className={classes.subContent} variant="contained" color="primary" type="submit" style={{marginTop: "10px"}}>
                Send
            </Button>
            </form>
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
                    {messagingTable.map((row) => (
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
    </div>
  );
}