import React, { FC, useRef } from 'react';
import SkillsCategory from './skillsCategory/skillsCategory';
import { ContentWrapper } from './skillsContent.styles';
import { skills, skillsCategories } from 'helpers/helpers';
import { useGSAP } from '@gsap/react';
import gsap, { Power0 } from 'gsap';

const SkillsContent: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refTab = useRef<React.RefObject<any>[]>(
        Array.from(skills, () => React.createRef())
    );

    const containerRef = useRef(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
            skills.map((_, i) => {
                const el = refTab.current[i]?.current;
                if (el) {
                    timeline.from(el, {
                        opacity: 0,
                        x: 0,
                        y: 10,
                        ease: Power0.easeOut,
                        duration: 0.2,
                        delay: 0.3,
                    });
                }
            });
            timeline.play();
        },
        { scope: containerRef }
    );

    return (
        <ContentWrapper ref={containerRef}>
            {skills.map((item, i) => (
                <SkillsCategory
                    $refSkill={refTab.current[i]}
                    $skill={item}
                    $category={skillsCategories[i]}
                    key={skillsCategories[i]}
                />
            ))}
        </ContentWrapper>
    );
};


export default SkillsContent;
