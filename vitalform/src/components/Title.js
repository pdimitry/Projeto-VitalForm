import React, { useEffect } from 'react';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';

const TitleAndFavicon = () => {
  useEffect(() => {
    document.title = "Vital Form";
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = logoNavBar;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = logoNavBar;
      document.head.appendChild(newLink);
    }
  }, []);

  return null;
};

export default TitleAndFavicon;
