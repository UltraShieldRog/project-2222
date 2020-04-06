import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
  },
  content:{
    margin: "0px 60px",
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                Academic Honesty
            </Typography>
            </Container>
        </div>
        <div className={classes.content}>
            <h2>Academic honesty</h2>
            <p>
            While the University is aware that the vast majority of students and staff act ethically and honestly, it is opposed to and will not tolerate academic dishonesty or plagiarism and will treat all allegations of dishonesty seriously.
            <br></br>
            <br></br>
            Further information on academic honesty, academic dishonesty, and the resources available to all students can be found on the academic integrity pages on the current students website: https://sydney.edu.au/students/academic-integrity.html.
            <br></br>
            <br></br>
            Further information for on research integrity and ethics for postgraduate research students and students undertaking research-focussed coursework such as Honours and capstone research projects can be also be found on the current students website: https://sydney.edu.au/students/research-integrity-ethics.html.
            </p>
            <br></br>
            <h2>Compliance statement</h2>
            <p>
            In submitting this work, I acknowledge I have understood the following:
            <br></br>
            <br></br>
            I have read and understood the University of Sydney's Academic Honesty in Coursework Policy 2015.
            <br></br>
            <br></br>
            The work is substantially my own and where any parts of this work are not my own I have indicated this by acknowledging the source of those parts of the work and enclosed any quoted text in quotation marks.
            <br></br>
            <br></br>
            The work has not previously been submitted in part or in full for assessment in another unit unless I have been given permission by my unit of study coordinator to do so.
            <br></br>
            <br></br>
            The work will be submitted to similarity detection software (Turnitin) and a copy of the work will be retained in Turnitin's paper repository for future similarity checking. Note: work submitted by postgraduate research students for research purposes is not added to Turnitin's paper repository.
            <br></br>
            <br></br>
            Engaging in plagiarism or academic dishonesty in coursework will, if detected, lead to the University commencing proceedings under the Academic Honesty in Coursework Policy 2015 and the Academic Honesty Procedures 2016.
            <br></br>
            <br></br>
            Engaging in plagiarism or academic dishonesty in research-focussed work will lead to the University commencing proceedings under the Research Code of Conduct 2013 and the Academic Honesty Procedures 2016.
            <br></br>
            <br></br>
            Engaging another person to complete part or all of the submitted work will, if detected, lead to the University commencing proceedings against me for potential student misconduct under the University of Sydney (Student Discipline) Rule 2016.
            <br></br>
            <br></br>
            Please refer to <a href="https://sydney.edu.au/students/academic-integrity.html">https://sydney.edu.au/students/academic-integrity.html</a> for details.
            </p>
        </div>
    </div>
  );
}