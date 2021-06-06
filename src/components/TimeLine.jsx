import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    heading: {
      fontSize: '1rem',
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  
  const CustomTimeLine = (props) => {
    const classes = useStyles();
    const date = new Date();
    const {classColorDivider,data, title} = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className="contentInformation">
        <div className={`dividerVertical ${classColorDivider}`}>
          <Typography component="h5" variant="h5" className="titlesInformation">
            {title}
          </Typography>
        </div>
        <Timeline align="alternate">
            {data.map(item => (
              <TimelineItem>
                  <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                      {item.initial_date} - {item.final_date}
                      </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot variant="outlined" color={item.color} />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                      <Accordion expanded={expanded === 'panel' + item.number} onChange={handleChange('panel' + item.number)}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography variant="h6" component="h1" className={classes.heading}>{item.position}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="detailsTimeline">
                          <Typography>
                            <b>
                              <BusinessIcon className="iconTimeline" />
                              Empresa:
                            </b> {item.business}
                          </Typography>
                          <Typography>
                            <b>
                              <DateRangeIcon className="iconTimeline" />
                              Tiempo de Experiencia:
                            </b> {item.countMonth} Meses
                          </Typography>
                          <br />
                          <Typography className="functionsTimeline">{item.functions}</Typography>
                        </AccordionDetails>
                      </Accordion>
                  </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </div>
    );
}

export default CustomTimeLine;