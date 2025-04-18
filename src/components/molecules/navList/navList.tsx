import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url, NavIcons } from '../../../helpers/helpers';
import { ListWrapper, StyledText, StyledIcon } from './navList.styles';
import { StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { useLocation } from 'react-router-dom';

const NavList: FC<NavListProps> = ({ $refNav, onLinkClick }) => {
    const location = useLocation();

    return (
        <ListWrapper ref={$refNav}>
            {Navdata.map((item, i: number) => {
                const link = Url[i];
                const isActive = location.pathname === link;

                return (
                    <StyledLink
                        to={link}
                        key={i}
                        onClick={() => {
                            if (!isActive) {
                                onLinkClick?.();
                            }
                        }}
                    >
                        <StyledIcon>
                            <SvgIcon
                                Icon={NavIcons[i]}
                                $width={window.innerWidth < 1440 ? 35 : 40}
                                $height={window.innerWidth < 1440 ? 35 : 40}
                            />
                        </StyledIcon>
                        <StyledText>
                            <Text
                                content={item}
                                key={item}
                                $fontSize={window.innerHeight < 800 ? 'XS' : 'S'}
                                $fontWeight={'S'}
                                $margin={0}
                                $pointer={true}
                            />
                        </StyledText>
                    </StyledLink>
                );
            })}
        </ListWrapper>
    );
};

export default NavList;
