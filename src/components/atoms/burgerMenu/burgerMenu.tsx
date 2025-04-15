import { FC } from 'react';
import { BurgerWrapper, OuterLine, InnerLine } from './burgerMenu.styles';

interface Props {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    isOpen?: boolean;
}

const BurgerMenu: FC<Props> = ({ onClick, isOpen }) => {
    return (
        <BurgerWrapper onClick={onClick} $isOpen={isOpen}>
            <OuterLine />
            <InnerLine />
            <OuterLine />
        </BurgerWrapper>
    );
};

export default BurgerMenu;
