import React, { FC, useRef } from 'react';
import Text from 'components/atoms/text/text';
import { aboutContentData } from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
import { useGSAP } from '@gsap/react';
import gsap, { Power0 } from 'gsap';

const AboutContent: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refTextTab = useRef<React.RefObject<any>[]>(
        Array.from(aboutContentData, () => React.createRef())
    );

    const containerRef = useRef(null);

    useGSAP(
        () => {
            const aboutTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            aboutContentData.forEach((_, i) => {
                const el = refTextTab.current[i]?.current;
                if (el) {
                    aboutTimeline.from(el, {
                        opacity: 0,
                        y: 10,
                        ease: Power0.easeOut,
                        duration: 0.3,
                        delay: 0.2,
                    });
                }
            });

            aboutTimeline.play();
        },
        { scope: containerRef }
    );

    return (
        <ContentTemplate ref={containerRef}>
            {aboutContentData.map((item, i) => (
                <Text
                    $refText={refTextTab.current[i]}
                    content={item}
                    key={item}
                    $fontWeight={'XM'}
                    $fontSize={'XS'}
                    $margin={10}
                    $center={item === '500 239 053' ? true : false}
                />
            ))}
        </ContentTemplate>
    );
};

export default AboutContent;
