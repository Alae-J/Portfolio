import { FC, useContext } from 'react';
import {
    TextWrapper,
    Wrapper,
    TitleWrapper,
    SkillsWrapper,
} from './skillsCategory.styles';
import Text from 'components/atoms/text/text';
import PseudoCode from '../pseudoCode/pseudoCode';
import { SkillsProps } from './skillsCategory.types';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { techIconsMap } from 'helpers/helpers';
import AppContext from 'context';

const SkillsCategory: FC<SkillsProps> = ({ $skill, $category, $refSkill }) => {
    const {
        store: { actualScreenWidth },
    } = useContext(AppContext);

    const iconsMap = techIconsMap[$category] || {};

    return (
        <Wrapper ref={$refSkill}>
            <PseudoCode />
            <TitleWrapper>
                <Text
                    $fontSize={
                        actualScreenWidth < 700 || window.innerWidth < 700 ? 'XS' : 'S'
                    }
                    $fontWeight={'M'}
                    $margin={5}
                    content={$category}
                />
            </TitleWrapper>
            <SkillsWrapper>
                {$skill.map((item) => {
                    const Icon = iconsMap[item];
                    return (
                        <TextWrapper key={item}>
                        <Text
                            $center
                            $fontSize={'XS'}
                            $fontWeight={
                                actualScreenWidth < 700 || window.innerWidth < 700 ? 'S' : 'M'
                            }
                            $margin={5}
                            content={item}
                        />{' '}
                        {Icon && <SvgIcon Icon={Icon} $width={43} $height={43} />}
                        </TextWrapper>
                    );
                })}
            </SkillsWrapper>
        </Wrapper>
    );
};

export default SkillsCategory;
