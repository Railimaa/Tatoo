import {
  FaHome,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

import { IoMdContact } from 'react-icons/io';
import { GiTripleNeedle } from 'react-icons/gi';
import { MdLocationOn, MdOutlineMail } from 'react-icons/md';

export default function useSideBar() {
  const text = encodeURIComponent('Olá, gostaria de fazer um orçamento');
  const phoneNumber = '5511974742302';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

  const links = [
    {
      id: Math.random(),
      text: 'Home',
      path: '/',
      Icon: FaHome,
    },
    {
      id: Math.random(),
      text: 'Sobre nós',
      path: '/me',
      Icon: IoMdContact,
    },
    {
      id: Math.random(),
      text: 'Trabalhos',
      path: '/services',
      Icon: GiTripleNeedle,
    },
    {
      id: Math.random(),
      text: 'Piraporinha - SP',
      Icon: MdLocationOn,
    },

  ];

  const linksMidia = [
    {
      id: Math.random(),
      Icon: FaInstagram,
      path: 'https://instagram.com/sinclair.tattoo?igshid=MzRlODBiN',
    },
    {
      id: Math.random(),
      Icon: FaWhatsapp,
      path: `${whatsappUrl}`,
    },
    {
      id: Math.random(),
      Icon: FaTwitter,
      path: `${whatsappUrl}`,
    },
    {
      id: Math.random(),
      Icon: MdOutlineMail,
      path: 'https://instagram.com/sinclair.tattoo?igshid=MzRlODBiNWF',
    },
  ];

  return {
    links,
    linksMidia,
  };
}
