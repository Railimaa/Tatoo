import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function useFooter() {
  const text = encodeURIComponent('Olá, gostaria de fazer um orçamento');
  const phoneNumber = '5511974742302';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

  const links = [
    {
      id: 1,
      Icon: FaInstagram,
      path: 'https://instagram.com/sinclair.tattoo?igshid=MzRlODBiNWF',
    },
    {
      id: 2,
      Icon: FaWhatsapp,
      path: `${whatsappUrl}`,
    },
    {
      id: 3,
      Icon: FaTwitter,
      path: `${whatsappUrl}`,
    },
    {
      id: 4,
      Icon: MdOutlineMail,
      path: 'https://instagram.com/sinclair.tattoo?igshid=MzRlODBiNWFl',
    },
  ];

  return { links };
}
