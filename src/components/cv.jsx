import { Fragment } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProfileProfessional from "./ProfileProfessional";
import Knowledge from "./Knowledge";
import { Knowledge as Know } from "../constants/Knowledge";
import { Experience } from "../constants/Expirience";
import { Education } from "../constants/Education";
import Cards from "./Cards";
import CustomTimeLine from "./TimeLine";
import Divider from "@material-ui/core/Divider";
import { Card } from '@material-ui/core';

const CurriculumVitae = () => {
    return (
        <Card className="contentRoot">
            <Header classColorDivider="darkgray" title="Hoja de Vida" name="Juan Jose Quintero Reatiga" position="Desarrollador"/>
            <Divider  />
            <ProfileProfessional classColorDivider="lightgray" />
            <Divider  />
            <CustomTimeLine classColorDivider="darkgray" data={Experience} title="Experiencia Laboral" />
            <Divider  />
            <Knowledge classColorDivider="lightgray" data={Know} title="Conocimientos" />
            <Divider  />
            <Cards classColorDivider="darkgray" data={Education} title="Educación/Cursos"/>
            <Divider  />
            <Footer classColorDivider="lightgray" title="Juan Jose Quintero Reatiga" description="Ingeniero de Sistemas"/>
        </Card>        
    )
}

export default CurriculumVitae