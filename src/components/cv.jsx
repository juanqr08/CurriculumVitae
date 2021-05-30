import { Fragment } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProfileProfesional from "./ProfileProfetional";
import CustomTimeLine from "./TimeLine";
import Divider from "@material-ui/core/Divider";

const CurriculumVitae = () => {
    return (
        <Fragment>
            <Header title="Hoja de Vida" name="Juan Jose Quintero" position="Desarrollador"/>
            <Divider  />
            <ProfileProfesional />
            <CustomTimeLine />
            <Footer title="Juan Jose Quintero Reatiga" description="Ingeniero de Sistemas"/>
        </Fragment>        
    )
}

export default CurriculumVitae