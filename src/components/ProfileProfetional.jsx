import photo from "../assets/img/photo.jpg";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import {main_information, social_networks} from "../constants/Informations";

const ProfileProfetional = (props) => {
    return (
        <div className="contentInformation">
            <Typography component="h5" variant="h5" className="titlesInformation">
                Perfil Profesional
            </Typography>
            <CardContent className="contentInformationGeneral">
                <Typography component="h5" variant="h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium suscipit expedita temporibus soluta reiciendis dolorem maxime ad molestiae quod! Voluptate ipsam voluptas quisquam sequi iste odit hic totam quaerat?
                </Typography>
            </CardContent>
        </div>
    )
}

export default ProfileProfetional;