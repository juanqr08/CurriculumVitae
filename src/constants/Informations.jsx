import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export const main_information = [
    { name: 'email', value: 'jquintero623@gmail.com', url: undefined, icon: <MailIcon />},
    { name: 'N- Contacto', value: '+57 312 351 3362', url: 'https://wa.me/573123513362', icon: <LocalPhoneIcon />},
    { name: 'Fecha de Nacimiento', value: '1997-05-08', url: undefined, icon: <EventIcon />},
    { name: 'Lugar de Nacimiento', value: 'Socorro - Santander', url: undefined, icon: <PlaceIcon />},
]

export const social_networks = [
    { name: 'LinkedIn', url: 'www.linkedin.com/in/juan-jose-quintero-reatiga-65258a139', icon: <LinkedInIcon />, class: 'linkedin'},
    { name: 'WhatsApp', url: 'https://wa.me/573123513362', icon: <WhatsAppIcon />, class: 'whatsapp'},
]