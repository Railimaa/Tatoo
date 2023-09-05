import { useState } from 'react';

export default function useHeader() {
  const [sideBar, setSideBar] = useState(false);

  const text = encodeURIComponent('Olá There, gostaria de fazer um orçamento...');
  const phoneNumber = '5511974742302';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

  function handleShowSideBar() {
    setSideBar((prevState) => !prevState);
  }

  return {
    sideBar,
    whatsappUrl,
    handleShowSideBar,
  };
}
