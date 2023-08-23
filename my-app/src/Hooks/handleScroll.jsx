import { useEffect, useState } from 'react';

const useScrollEffect = () => {
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);
  const [stayLogo, setStayLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset, 2);
      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [logoSize, oldLogoSize]);

  return { logoSize, stayLogo };
};

export default useScrollEffect;