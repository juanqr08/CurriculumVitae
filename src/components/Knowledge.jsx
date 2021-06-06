import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '40%',
    },
  }));

const Knowledge = (props) => {
    
    const classes = useStyles()
    const {classColorDivider, data, title} = props;
    const [progress, setProgress] = React.useState(10);
    const [buffer, setBuffer] = React.useState(10);

    return (
        <div className="contentInformation">
            <div className={`dividerVertical ${classColorDivider}`}>
                <Typography component="h5" variant="h5" className="titlesInformation">
                    {title}
                </Typography>
            </div>
            <div className="contentKnowledge">
                {data.map(item => (
                    <div className="knowledge">
                        <Typography component="h5" variant="h5">
                            {item.icon}
                            {item.name}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                                <LinearProgress variant="buffer" value={item.percentage} valueBuffer={buffer} />
                            </Box>
                            <Box minWidth={35}>
                                <Typography variant="body2" color="textSecondary">{`${Math.round(
                                item.percentage,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Knowledge;