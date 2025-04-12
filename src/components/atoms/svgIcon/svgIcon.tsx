import { FC } from 'react';
import { SvgContainer } from './svgIcon.styles';
import { SvgIconProps } from './svgIcon.types';

const SvgIcon: FC<SvgIconProps> = ({ Icon, $width, $height }) => {
    return (
        <SvgContainer $width={$width} $height={$height}>
            <Icon style={{ maxHeight: '100%', maxWidth: '100%' }} />
        </SvgContainer>
    );
};

export default SvgIcon;
