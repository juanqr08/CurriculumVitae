import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {classColorDivider, data, title} = props;
  const date = new Date();
  const currentMonth = (date.getUTCMonth() + 1) < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1
  const currentDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const currentDate = `${date.getFullYear()}-${currentMonth}-${currentDay}`

  return (
    <div className="contentInformation">
        <div className={`dividerVertical ${classColorDivider}`}>
          <Typography component="h5" variant="h5" className="titlesInformation">
              {title}
          </Typography>
        </div>
        <div className="contentCards">
            {data.map(item => (
                <Card className="cardInfo">
                    <CardContent className="cardContentGeneral">
                      {/* <div className="containerImg">
                        <img src={item.img} alt={item.sourceImg} title={item.sourceImg} srcset="" />
                      </div> */}
                      <div className="details">
                            { item.date && item.state == false ? 
                            (
                              <Typography className="cardDate">
                                {item.date}
                              </Typography>
                            ) : (
                              <Typography className="cardDate">
                                {currentDate}
                              </Typography>
                            )}
                        <Typography className="titlesCard">
                            <DescriptionIcon className="iconCard" />
                            {item.name}
                        </Typography>
                        <Typography className="titlesCard" color="textSecondary">
                            <AccountBalanceIcon className="iconCard"/>
                            {item.institution}
                        </Typography>
                        <Typography className="contentInformationCard" variant="body2" component="p">
                            {item.detail}
                        </Typography>
                      </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
}

export default Cards;