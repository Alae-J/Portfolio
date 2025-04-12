import React, { FC, useEffect, useRef } from 'react';
import SkillsCategory from './skillsCategory/skillsCategory';
import { ContentWrapper } from './skillsContent.styles';
import { skills, skillsCategories } from 'helpers/helpers';
import gsap from 'gsap';
import { Power0 } from 'gsap/all';

const SkillsContent: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refTab = useRef<React.RefObject<any>[]>(
        Array.from(skills, () => React.createRef())
    );
    useEffect(() => {
        const skillsTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        skills.map((_: any, i: number) =>
            skillsTimeline.from(refTab.current[i].current, {
                opacity: 0,
                x: 0,
                y: 10,
                ease: Power0.easeOut,
                duration: 0.2,
                delay: 0.3
            })
        );
        skillsTimeline.play();
    }, [refTab]);

    return (
        <ContentWrapper>
            {skills.map((item, i) => (
                <SkillsCategory
                    refSkill={refTab.current[i]}
                    skill={item}
                    category={skillsCategories[i]}
                    key={skillsCategories[i]}
                />
            ))}
        </ContentWrapper>
    );
};

export default SkillsContent;
