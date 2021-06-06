import photo from "../assets/img/photo.jpg";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import {main_information, social_networks} from "../constants/Informations";
import Link from '@material-ui/core/Link';


const Header = (props) => {
    const {classColorDivider, name, position} = props;
    return (
        <div className="contentInformation">
            <div className={`dividerVertical ${classColorDivider}`}>
                <Avatar
                    className="profilePhoto"
                    src={photo}
                    title={name}
                />
            </div>
            <CardContent className="contentHeader">
                <Typography component="h5" variant="h5">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {position}
                </Typography>
                <Divider />
                <div className="informationCard">
                    { main_information.map( (item) => (
                        <Typography variant="subtitle2" color="textSecondary" className="mainInformation">
                            {item.icon}
                            <h4 className="mainInformationContent" title={item.name}>
                                {item.value}
                            </h4>
                        </Typography>
                    ))}
                </div>
                <Divider />
                <Typography className="social_networks">
                { social_networks.map( (item) => (
                    <Link href={item.url}>
                        <Avatar className={item.class}>
                            {item.icon}
                        </Avatar>
                    </Link>
                ))}
                </Typography>
            </CardContent>
        </div>
    )
}

export default Header;