import React, { FC, useRef } from 'react';
import Text from 'components/atoms/text/text';
import { aboutContentData } from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
// import gsap from 'gsap';
// import { Power0 } from 'gsap/all';

const AboutContent: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refTextTab = useRef<React.RefObject<any>[]>(
        Array.from(aboutContentData, () => React.createRef())
    );
    // useEffect(() => {
    //     if (!refTextTab.current) return;
    //     const aboutTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     aboutContentData.map((_: any, i: number) =>
    //         aboutTimeline.from(refTextTab.current[i].current, {
    //             opacity: 0,
    //             x: 0,
    //             y: 10,
    //             ease: Power0.easeOut,
    //             duration: 0.3,
    //             delay: 0.3,
    //         })
    //     );
    //     aboutTimeline.play();
    // }, [refTextTab]);

    return (
        <ContentTemplate>
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
