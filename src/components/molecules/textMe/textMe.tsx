import { FC, useRef } from 'react';
import { Wrapper } from './textMe.styles';
import Text from 'components/atoms/text/text';
import { StyledImage } from './textMe.styles';
import PersonalImage from 'assets/personalImage/p.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HelloTextContainer: FC = () => {
    const $refText = useRef(null);

    useGSAP(
        () => {
            gsap.from($refText.current, {
                opacity: 0,
                y: -10,
                duration: 1,
                delay: 1.9,
                ease: 'power2.out',
            });
        },
        { scope: $refText }
    );

    return (
        <Wrapper ref={$refText}>
            <Text
                content={'Contact me!'}
                $fontSize={'M'}
                $fontWeight={'M'}
                $margin={0}
                $background
                $pointer={true}
                $center
                $click={() => window.open('mailto:alaejahid8@gmail.com')}
            />
            <StyledImage src={PersonalImage} />
        </Wrapper>
    );
};

export default HelloTextContainer;
