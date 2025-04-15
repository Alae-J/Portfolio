import { FC, useRef, useContext, useEffect } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import LogoIcon from 'assets/logoIcon/logo.svg?react';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';
import AppContext from 'context';
import { useLocation } from 'react-router-dom';

import gsap from 'gsap';
import { Back } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Nav: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refLogo = useRef(null);
  const refNav = useRef(null);

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(refLogo.current, {
        opacity: 0,
        rotation: -180,
        ease: Back.easeOut,
        duration: 0.8
      });
      t1.from(refNav.current, {
        scaleX: 0.7,
        rotateX: 90,
        ease: Back.easeOut,
        duration: 0.8
      });
    },
    { scope: refContainer }
  );  

  const { store, setStore } = useContext(AppContext);

  const closeNav = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setStore(prev => ({ ...prev, mobileNav: false }));
      }
    });
  
    tl.to(refContainer.current, {
      x: '-300px',
      opacity: 0.5,
      duration: 0.3,
      ease: Back.easeIn
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        store.mobileNav &&
        refContainer.current &&
        !refContainer.current.contains(target)
      ) {
        setStore(prev => ({ ...prev, mobileNav: false }));
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [store.mobileNav]);
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  
  return (
    
    <NavWrapper
      ref={refContainer}
      $mobile={store.mobileNav}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('a[href]')) {
          setStore(prev => ({ ...prev, mobileNav: false }));
        }
      }}
    >
      <StyledIcon
        ref={refLogo}
        to="/"
        onClick={() => {
          if (!isHomeActive) {
            closeNav();
          }
        }}
      >
        <SvgIcon Icon={LogoIcon} $height={80} $width={110} />
      </StyledIcon>
      <NavList $refNav={refNav} onLinkClick={closeNav} />
    </NavWrapper>
  );
};

export default Nav;
