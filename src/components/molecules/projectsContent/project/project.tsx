import { FC, useState } from 'react';
import {
    ProjectWrapper,
    StyledProject,
    CoverWrapper,
    StyledLink,
    ContentWrapper,
} from './project.styles';
import { ProjectProps } from './project.types';
import Button from 'components/atoms/button/button';
import { MainWrapper } from './project.styles';

const Project: FC<ProjectProps> = ({
    refproject,
    image,
    content,
    link,
    title
}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <MainWrapper>
            <h1 style={{ fontFamily: "'Encode Sans SC', sans-serif", fontSize: '1.4em' }}>{title}</h1>
            <ProjectWrapper
                ref={refproject}
                onMouseLeave={(e) => {
                    if (window.innerWidth > 580) {
                        e.stopPropagation();
                        setShowDescription(false);
                    }
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    setShowDescription(!showDescription);
                }}
            >
                <StyledProject src={image} />
                <CoverWrapper
                    onMouseOver={() => {
                        if (window.innerWidth > 580) {
                            setShowDescription(true);
                        }
                    }}
                    onClick={() => setShowDescription(true)}
                />
                <ContentWrapper $show={showDescription}>
                    <h2>{title}</h2>
                    {showDescription && content}
                    <StyledLink href={link}>
                        {showDescription && <Button content="GITHUB" />}
                    </StyledLink>
                </ContentWrapper>
            </ProjectWrapper>
        </MainWrapper>
    );
};

export default Project;
