import { FC } from 'react';
import { TextProps } from './text.types';
import { TextContainer } from './text.styles';

const Text: FC<TextProps> = (props) => {
    const { content, $refText, $click } = props;
    return (
        <TextContainer ref={$refText} {...props} onClick={$click}>
            {content}
        </TextContainer>
    );
};

export default Text;
