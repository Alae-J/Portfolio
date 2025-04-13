import { FC, useRef } from 'react';
import Text from 'components/atoms/text/text';
import {
    mainContentDataFontSize,
    mainContentDataFontWight,
} from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
import { MainPageTemplateProps } from './mainPageContent.types';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import SpecialTextContainer from 'components/molecules/quoteText/quoteText';
import EmailComponent from 'components/molecules/emailComponent/emailComponent';
import { useGSAP } from '@gsap/react';
import gsap, { Power0 } from 'gsap';

const MainPageTemplate: FC<MainPageTemplateProps> = ({
    content,
    mail,
    pointer,
    children,
}) => {
    const refContent = useRef(null);
    const refSpecialText = useRef(null);

    useGSAP(() => {
        if (refContent.current) {
            gsap.from(refContent.current, {
                opacity: 0,
                ease: Power0.easeOut,
                duration: 1,
                delay: 0.5,
            });
        }
    }, { scope: refContent });

    useGSAP(() => {
        if (refSpecialText.current) {
            gsap.from(refSpecialText.current, {
                opacity: 0,
                ease: Power0.easeOut,
                duration: 1,
                delay: 0.5,
            });
        }
    }, { scope: refSpecialText });

    return (
        <MainTemplate>
            <ContentTemplate ref={refContent}>
                {children}
                {content.map((item, i) => (
                    <Text
                        $pointer={pointer}
                        content={item}
                        key={item}
                        $fontWeight={mainContentDataFontWight[i]}
                        $fontSize={mainContentDataFontSize[i]}
                        $margin={10}
                        $background={
                            item === 'Full Stack Developer · React & Spring Enthusiast' ||
                            item === 'Download CV' ||
                            item === '+212 7 02 08 45 35'
                        }
                        $center={
                            item === 'Full Stack Developer · React & Spring Enthusiast' ||
                            item === 'Download CV' ||
                            item === '+212 7 02 08 45 35'
                        }
                        $click={() => {
                            if (item === 'Download CV') {
                                window.open('resume/cv1.pdf', '_black');
                            }
                        }}
                    />
                ))}
            </ContentTemplate>
            {mail ? (
                <EmailComponent $refEmail={refSpecialText} />
            ) : (
                <SpecialTextContainer $refSpecialText={refSpecialText} />
            )}
        </MainTemplate>
    );
};

export default MainPageTemplate;
