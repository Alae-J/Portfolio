import { FC, useEffect, useRef } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import LogoIcon from 'assets/logoIcon/logo.svg?react';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';
import { useContext } from 'react';
import AppContext from 'context';
import gsap from 'gsap';
import { Back } from 'gsap/all';

const Nav: FC = () => {
  const refLogo = useRef(null);
  const refNav = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    t1.from(refLogo.current, {
      opacity: 0,
      rotation: -180,
      ease: Back.easeOut,
      duration: 1,
    });
    t1.from(refNav.current, {
      scaleX: 0.7,
      rotateX: 90,
      ease: Back.easeOut,
      duration: 1,
    });
    t1.play();
  }, [refLogo]);

  const { store, setStore } = useContext(AppContext);

  return (
    <NavWrapper
      mobile={store.mobileNav}
      onClick={() => {
        setStore({
          ...store,
          mobileNav: false
        });
      }}
    >
      <StyledIcon ref={refLogo} to="/">
        <SvgIcon Icon={LogoIcon} height={80} width={110} />
      </StyledIcon>
      <NavList refNav={refNav} />
    </NavWrapper>
  );
};

export default Nav;
