import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { monthNames } from '../constants/months';

const CustomTimeLine = (props) => {
    const date = new Date();
    const {classColorDivider,data, title} = props;
    const [expanded, setExpanded] = React.useState(false);
    const currentMonth = monthNames[date.getUTCMonth()]['initials']
    const currentDate = `${currentMonth} ${date.getUTCFullYear()}`

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const [width, setWindowWidth] = React.useState(0)
    React.useEffect(() => { 

      updateDimensions();

      window.addEventListener("resize", updateDimensions);
      return () => 
        window.removeEventListener("resize",updateDimensions);
      }, [])
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }
  
    return (
      <div className="contentInformation">
        <div className={`dividerVertical ${classColorDivider}`}>
          <Typography component="h5" variant="h5" className="titlesInformation">
            {title}
          </Typography>
        </div>
        { width < 482 ? (
          <Timeline>
              {data.map(item => (
                <TimelineItem>
                    <TimelineOppositeContent>
                          { item.final_date ? (
                            <Typography variant="body2" color="textSecondary">
                              {item.initial_date} - {item.final_date}
                            </Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {item.initial_date} - {currentDate}
                            </Typography>
                          )}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color={item.color} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Accordion className="accordionCard" expanded={expanded === 'panel' + item.number} onChange={handleChange('panel' + item.number)}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography variant="h6" component="h1" className="heading">{item.position}</Typography>
                          </AccordionSummary>
                          <AccordionDetails className="detailsTimeline">
                            <Typography className="seccionsTimeline">
                              <b>
                                <BusinessIcon className="iconTimeline" />
                                Empresa:
                              </b> {item.business}
                            </Typography>
                            <Typography className="seccionsTimeline">
                              <b>
                                <DateRangeIcon className="iconTimeline" />
                                Tiempo de Experiencia:
                              </b> {item.countMonth} Meses
                            </Typography>
                            <Typography className="seccionsTimeline">
                              <b>
                                <PlayCircleFilledWhiteIcon className="iconTimeline" />
                                Activo:
                              </b> {item.state ? ("Si"):("No")}
                            </Typography>
                            <br />
                            <Typography className="functionsTimeline">{item.functions}</Typography>
                          </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>
              ))}
          </Timeline>
        ) : (
          <Timeline align="alternate">
              {data.map(item => (
                <TimelineItem>
                    <TimelineOppositeContent>
                          { item.final_date ? (
                            <Typography variant="body2" color="textSecondary">
                              {item.initial_date} - {item.final_date}
                            </Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {item.initial_date} - {currentDate}
                            </Typography>
                          )}
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
                            <Typography variant="h6" component="h1" className="heading">{item.position}</Typography>
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
                            <Typography>
                              <b>
                                <PlayCircleFilledWhiteIcon className="iconTimeline" />
                                Activo:
                              </b> {item.state ? ("Si"):("No")}
                            </Typography>
                            <br />
                            <Typography className="functionsTimeline">{item.functions}</Typography>
                          </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>
              ))}
          </Timeline>

        )}
      </div>
    );
}

export default CustomTimeLine;