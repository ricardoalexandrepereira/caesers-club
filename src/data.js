// import images
import Logo from '../src/img/header/logo111.png';
import GalleryImg1 from '../src/img/gallery/h.jpg';
import GalleryImg2 from '../src/img/gallery/a.jpg';
import GalleryImg3 from '../src/img/gallery/b.jpg';
import GalleryImg4 from '../src/img/gallery/c.jpg';
import GalleryImg5 from '../src/img/gallery/d.jpg';
import GalleryImg6 from '../src/img/gallery/e.jpg';
import GalleryImg7 from '../src/img/gallery/1.png';
import GalleryImg8 from '../src/img/gallery/logo.jpg';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
/* import { FiSend } from 'react-icons/fi'; */
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
/* import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io'; */

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: 'home', name: 'Inicio' },
    { href: 'about', name: 'Sobre' },
    { href: 'gallery', name: 'Galeria' },
    { href: 'prices', name: 'Preços' },
    /* { href: 'interview', name: 'enterview' }, */
    { href: 'contact', name: 'Contacto' },
  ],
};

export const socialData = [
  { href: 'https://m.facebook.com/profile.php?id=100010268027051&eav=AfY7NvmE3bSKEZOdQo0UUMkFWI8mj4TD7-IS1iPIVcJEUnPDh1UmKH-QFzdcwMpt9fw&paipv=0', icon: <GrFacebookOption /> },
  /* { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> }, */
];

export const heroData = {
  title: 'I’m Cesar.',
  subtitle:
    '"Aqui barba, bigode e cabelo são coisas sérias!"',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Sobre nós:',
  subtitle1:
    'Barbearia Caeser´s Club no Centro Comercial Saldenha, espaço com decor vintage. Espaço familiar e tranquilo. Faça hoje mesmo a sua visita e venha conhecer o Barbeiro do Saldenha',
  subtitle2:
    'Barba ou Cabelo, venha pôr-se a perceito, nada como sair bonito e comum corte perfeito.',
  btnText: 'mais sobre',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'A nossa Galeria:',
  btnText: 'ver tudo',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Quando o cliente gosta do teu trabalho -tu és bom- Quando ele retorna -Ès profissional.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Um corte de cabelo profissional tem o seu próprio poder, não só embelezam o corpo como também fazem com que nos sintamos únicos.",
      
    name: 'Ricardo Pereira',
    occupation: 'Web Developer',
  },
  {
    quoteImg: QuoteImg,
    message:
      'O maior prazer de um barbeiro é fazer o que as pessoas dizem que ele não é capaz !',
    name: 'Douglas Hane',
    occupation: 'barber Artist',
  },
];

export const contactData = {
  title: 'Contacto',
  info: [
    {
      title: 'Montijo',
      subtitle:
        'Barbearia Caeser´s Club no Centro Comercial Saldenha, espaço com decor vintage. Espaço familiar e tranquilo. Faça hoje mesmo a sua visita e venha conhecer o Barbeiro do Saldenha',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Praceta Cidade de Braga 14, 2870-138 Montijo',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '961 606 665',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    /* {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    }, */
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Praceta Cidade de Braga 14, 2870-138 Montijo',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '961606665',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'links uteis',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Horário',
    items: [
      { name: 'segunda-feira / 09:30 - 19:30' },
      { name: 'terça-feira / 09:30 - 19:30' },
      { name: 'quarta-feira / 09:30 - 19:30' },
      { name: 'quinta-feira / 09:30 - 19:30' },
      { name: 'sexta-feira / 09:30 - 19:30' },
      { name: 'sábado / 09:30 - 17:00' },
      { name: 'domingo / encerrado' },
    ],
  },
 /*  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  }, */
};
