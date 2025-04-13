import React, { useRef } from 'react';
import { ContentWrapper } from './projectsContent.styles';
import Project from './project/project';
import { useGSAP } from '@gsap/react';
import gsap, { Power0 } from 'gsap';

const ProjectsContent = ({
    ProjectMiniatures,
    ProjectsUrl,
    ProjectDescription,
    ProjectTitles,
}: {
    ProjectMiniatures: string[];
    ProjectsUrl: string[];
    ProjectDescription: string[];
    ProjectTitles: string[];
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refTab = useRef<React.RefObject<any>[]>(
        Array.from(ProjectMiniatures, () => React.createRef())
    );

    const containerRef = useRef(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            ProjectMiniatures.forEach((_, i) => {
                const el = refTab.current[i]?.current;
                if (el) {
                    timeline.from(el, {
                        opacity: 0,
                        y: 10,
                        ease: Power0.easeOut,
                        duration: 0.3,
                        delay: 0.2,
                    });
                }
            });

            timeline.play();
        },
        { scope: containerRef }
    );

    return (
        <ContentWrapper ref={containerRef}>
            {ProjectMiniatures.map((item, i) => (
                <Project
                    refproject={refTab.current[i]}
                    key={item}
                    image={item}
                    content={ProjectDescription[i]}
                    link={ProjectsUrl[i]}
                    title={ProjectTitles[i]}
                />
            ))}
        </ContentWrapper>
    );
};

export default ProjectsContent;
