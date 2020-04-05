import React from "react";
import Faq from "react-faq-component";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const data = {
  title: "General",
  rows: [
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
      {
          title: "my questions is blah blah",
          content: `My answer is blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          `,
      },
  ],
};

const styles = {
  titleTextColor: "black",
  rowTitleColor: "blue",
};

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 10, 0),
  },
}));

const config = {
  animate: true,
  // arrowIcon: "V",
};

export default function FAQs() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainContent}>
          <Container maxWidth="sm">
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              FAQs
          </Typography>
          </Container>
      </div>
      <div className={classes.mainContent}>
          <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
