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
  const {data, title} = props;

  return (
    <div className="contentInformation">
        <Typography component="h5" variant="h5" className="titlesInformation">
            {title}
        </Typography>
        <div className="contentCards">
            {data.map(item => (
                <Card className="cardInfo">
                    <CardContent className="cardContentGeneral">
                      {/* <div className="containerImg">
                        <img src={item.img} alt={item.sourceImg} title={item.sourceImg} srcset="" />
                      </div> */}
                      <div className="details">
                            { item.date ? 
                            (
                              <Typography className="cardDate">
                                {item.date}
                              </Typography>
                            ) : (
                              <Typography className="cardDate">
                                NADA
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