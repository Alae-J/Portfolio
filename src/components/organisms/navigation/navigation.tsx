import { FC, useRef, useContext } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import LogoIcon from 'assets/logoIcon/logo.svg?react';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';
import AppContext from 'context';

import gsap from 'gsap';
import { Back } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Nav: FC = () => {
  const refContainer = useRef(null);
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

  return (
    <NavWrapper
      ref={refContainer}
      $mobile={store.mobileNav}
      onClick={() =>
        setStore({
          ...store,
          mobileNav: false,
        })
      }
    >
      <StyledIcon ref={refLogo} to="/">
        <SvgIcon Icon={LogoIcon} $height={80} $width={110} />
      </StyledIcon>
      <NavList $refNav={refNav} />
    </NavWrapper>
  );
};

export default Nav;
