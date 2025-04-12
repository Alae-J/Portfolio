import Nav from 'components/organisms/navigation/navigation';
import { MainWrapper } from './mainTemplate.styles';
import ContentSection from 'components/organisms/contentSection/contentSection';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainTemplate = ({ children }: { children: any }) => {
    return (
        <MainWrapper>
            <Nav />
            <ContentSection>{children}</ContentSection>
        </MainWrapper>
    );
};

export default MainTemplate;
