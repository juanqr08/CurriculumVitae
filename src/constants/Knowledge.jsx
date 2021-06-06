import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBIcon } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
import ansibleIcon from '@iconify-icons/logos/ansible';
import apacheIcon from '@iconify-icons/logos/apache';
import springIcon from '@iconify-icons/logos/spring-icon';
import oracleIcon from '@iconify-icons/logos/oracle';
import tomcatIcon from '@iconify-icons/logos/tomcat';
import djangoIcon from '@iconify-icons/logos/django-icon';
import flaskIcon from '@iconify-icons/logos/flask';
import pythonIcon from '@iconify-icons/logos/python';

export const Knowledge = [
    {
        name: 'Docker',
        percentage: 70,
        icon: <MDBIcon className="iconKnowledge docker" fab icon="docker" />
    },
    {
        name: 'Git',
        percentage: 80,
        icon: <MDBIcon className="iconKnowledge" fab icon="github" />
    },
    {
        name: 'Angular',
        percentage: 80,
        icon: <MDBIcon className="iconKnowledge angular" fab icon="angular" />
    },
    {
        name: 'React.Js',
        percentage: 80,
        icon: <MDBIcon className="iconKnowledge react" fab icon="react" />
    },
    {
        name: 'Python',
        percentage: 90,
        icon: <Icon className="iconKnowledge" icon={pythonIcon} />
    },
    {
        name: 'Django',
        percentage: 90,
        icon: <Icon className="iconKnowledge" icon={djangoIcon} />
    },
    {
        name: 'Flask',
        percentage: 60,
        icon: <Icon className="iconKnowledge" icon={flaskIcon} />
    },
    {
        name: 'Java/Spring Boot',
        percentage: 50,
        icon: <Icon className="iconKnowledge" icon={springIcon} />
    },
    {
        name: 'Ansible',
        percentage: 90,
        icon: <Icon className="iconKnowledge" icon={ansibleIcon} />
    },
    {
        name: 'Bash Script',
        percentage: 90,
        icon: <MDBIcon className="iconKnowledge" fab icon="linux" />
    },
    {
        name: 'Powershell Script',
        percentage: 60,
        icon: <MDBIcon className="iconKnowledge windows" fab icon="windows" />
    },
    {
        name: 'Oracle Weblogic',
        percentage: 80,
        icon: <Icon className="iconKnowledge" icon={oracleIcon} />
    },
    {
        name: 'Apache Tomcat',
        percentage: 80,
        icon: <Icon className="iconKnowledge" icon={tomcatIcon} />
    },
    {
        name: 'Apache',
        percentage: 80,
        icon: <Icon className="iconKnowledge" icon={apacheIcon} />
    },
]