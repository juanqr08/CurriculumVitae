import { Fragment } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProfileProfessional from "./ProfileProfessional";
import { Experience } from "../constants/Expirience";
import { Education } from "../constants/Education";
import Cards from "./Cards";
import CustomTimeLine from "./TimeLine";
import Divider from "@material-ui/core/Divider";
import { Card } from '@material-ui/core';

const CurriculumVitae = () => {
    return (
        <Card>
            <Header title="Hoja de Vida" name="Juan Jose Quintero" position="Desarrollador"/>
            <Divider  />
            <ProfileProfessional />
            <Divider  />
            <CustomTimeLine data={Experience} title="Experiencia Laboral" />
            <Divider  />
            <Cards data={Education} title="Educación/Cursos"/>
            <Divider  />
            <Footer title="Juan Jose Quintero Reatiga" description="Ingeniero de Sistemas"/>
        </Card>        
    )
}

export default CurriculumVitae