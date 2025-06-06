import { FC, useContext } from 'react';
import Text from 'components/atoms/text/text';
import { Wrapper } from './emailComponent.styles';
import { EmailProps } from './emailComponent.types';
import AppContext from 'context';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import ContactIcon from 'assets/navIcons/contact.svg?react';

const EmailComponent: FC<EmailProps> = ({ $refEmail }) => {
    const {
        store: { actualScreenWidth },
    } = useContext(AppContext);

    return (
        <Wrapper ref={$refEmail}>
            <SvgIcon Icon={ContactIcon} $height={45} $width={45} />
            <Text
                content={'alaejahid8@gmail.com'}
                $fontWeight={'M'}
                $fontSize={
                    actualScreenWidth < 580 || window.innerWidth < 580 ? 'XS' : 'S'
                }
                $margin={0}
                $color={'white'}
                $pointer={true}
                $click={() => window.open('mailto:alaejahid8@gmail.com')}
                $center
            />
        </Wrapper>
    );
};

export default EmailComponent;
