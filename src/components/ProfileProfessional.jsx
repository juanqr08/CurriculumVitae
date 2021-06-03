import photo from "../assets/img/photo.jpg";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import {main_information, social_networks} from "../constants/Informations";

const ProfileProfessional = (props) => {
    return (
        <div className="contentInformation">
            <Typography component="h5" variant="h5" className="titlesInformation">
                Perfil Profesional
            </Typography>
            <CardContent className="contentInformationGeneral">
                <Typography component="h5" variant="h5" className="profileProfessional">
                Estudiante de ingeniería de sistemas con la totalidad de los semestres ya cursados a la espera de recibir el título profesional, con experiencia en Administración de Servicios de Aplicación (Weblogic, Tomcat, JBoss, etc.) en el Datacenter de Claro, liderando proyectos de desarrollo enfocados en la automatización de procesos, cuenta con experiencia en el manejo de lenguajes de programación como Python, Java, Bash, lenguajes de desarrollo Web (Angular, React, Bootstrap, etc.), lenguajes de desarrollo de API’s REST, etc., con conocimientos en automatización por medio de la herramienta Ansible y en la creación de contenedores Docker, laborando actualmente como desarrollador y gestor de automatizaciones generando informes en archivos Word, lectura y análisis de datos bajo archivos XML/JSON, adicional la creación de variedad de monitores y capturas de información sobre servicios de aplicación, Sistemas Operativos Unix u otras plataformas, con un buen manejo de herramientas ofimáticas y telemáticas.
                Con habilidades en toma de decisiones, iniciativa, autonomía mostrando excelentes resultados, eficacia y productividad, con gran interés en diversas áreas de conocimiento para poder actuar de acuerdo a la situación y tener así un criterio adecuado para la resolución de problemas, aplicando los conocimientos actualmente obtenidos para la administración y/o mejora de procesos a través de múltiples lenguajes o plataformas similares a Ansible, generando portales o apps web desarrollados con variedad de Frameworks como Angular, React, Django, BackEnd (Springboot, Django, Flask, etc). Su principal meta es llegar a ser un profesional, donde todos sus aportes muestren un excelente desempeño en su campo.
                </Typography>
            </CardContent>
        </div>
    )
}

export default ProfileProfessional;