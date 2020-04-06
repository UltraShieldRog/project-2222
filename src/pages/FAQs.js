import React from "react";
import Faq from "react-faq-component";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const dataA = {
  title: "General",
  rows: [
      {
          title: "Why my message is not sending?",
          content: `It is probably becuase you are muted by an admin. Please contact admin to resolve this issue.`,
      },
      {
          title: "What happens if I forgot my password?",
          content: `We are sorry that forget passowrd feature is not fully functional yet. Alternatively, check your browser cookies. `,
      },
      {
          title: "How to apply for more privileges?",
          content: `Contact our administrator, explain why you want more privileges, and provide your personal information. We will inform you of the results in 10 working days 
          `,
      },
      {
          title: "Why my thread is deleted?",
          content: `Check your email (it may be in the spam folder) - you should have received a reason for the deletion.
          Where do I start with front-end learnin.
          `,
      },
      {
          title: "Where do I start with front-end learning?",
          content: `Go to our homepage and choose the relevant courses you want to study. We recommand you to go thorugh JavaScript Basics first.
          `,
      },
  ],
};

const dataB = {
  title: "Other",
  rows: [
      {
        title: "What should I not put in the chat?",
        content: `Any offensive words or codes which may harm academic integrity should be posted. You may risk being muted if you harm the comminuity.`,
      },
      {
          title: "How do I look for more educational resources such as private tutoring to teach me these knowledges?",
          content: `If you are struggling with the contents of this website or you think the contents are not enough for you to understand, please contact us and provide feedbacks.`,
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
          <Typography variant="h5" align="center" color="secondary" paragraph>
            Differents types of helps can be found here!
          </Typography>
          </Container>
      </div>
      <div className={classes.mainContent}>
          <Faq data={dataA} styles={styles} config={config} />
          <br></br>
          <br></br>
          <br></br>
          <Faq data={dataB} styles={styles} config={config} />
      </div>
    </div>
  );
}
