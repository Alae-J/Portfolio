// contentTemplate.tsx
import { forwardRef } from 'react';
import { ContentWrapper } from './contentTemplate.styles';
import { ContentTemplateProps } from './contentTemplate.types';

const ContentTemplate = forwardRef<HTMLDivElement, ContentTemplateProps>(
    ({ children }, ref) => {
        return <ContentWrapper ref={ref}>{children}</ContentWrapper>;
    }
);

export default ContentTemplate;
