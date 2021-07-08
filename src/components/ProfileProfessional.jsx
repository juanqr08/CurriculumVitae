import photo from "../assets/img/photo.jpg";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import {main_information, social_networks} from "../constants/Informations";

const ProfileProfessional = (props) => {
    const {classColorDivider} = props;
    return (
        <div className="contentInformation">
            <div className={`dividerVertical ${classColorDivider}`}>
                <Typography component="h5" variant="h5" className="titlesInformation">
                    Perfil Profesional
                </Typography>
            </div>
            <CardContent className="contentInformationGeneral">
                <Typography component="h5" variant="h5" className="profileProfessional">
                Estudiante de Ingeniería de Sistemas cursando onceavo (11) semestre pendiente Practicas, con experiencia en Administración de Servicios de Aplicación (Weblogic, Tomcat, JBoss, etc.), manejo básico sobre Sistemas Operativos Unix/Linux y desarrollador al manejar la célula de automatización en el Datacenter de Claro, proporcionando soluciones a través de lenguajes de programación y Frameworks (Python, Java, Bash, Angular, Django, Ansible, etc.), laborando actualmente como Analista y desarrollador C2, con un buen manejo de herramientas ofimáticas y telemáticas.
                Con habilidades en toma de decisiones, iniciativa, autonomía mostrando excelentes resultados, eficacia y productividad, con gran interés en diversas áreas de conocimiento para poder actuar de acuerdo a la situación y tener así un criterio adecuado para la resolución de problemas, aplicando los conocimientos actualmente obtenidos para la administración y/o mejora de procesos. Su principal meta es llegar a ser un profesional, donde todos sus aportes muestren un excelente desempeño en su campo.
                </Typography>
            </CardContent>
        </div>
    )
}

export default ProfileProfessional;