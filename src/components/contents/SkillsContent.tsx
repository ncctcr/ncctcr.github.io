import React from 'react';
import Description from '../shared/Description';
import styled from 'styled-components';
import SkillsIcon from '../../assets/icons/dock/skills.png';
import GroupButtons from '../shared/GroupButtons';
import MuiIcon from '../../assets/icons/mui.png';
import ReactIcon from '../../assets/icons/react.png';
import HtmlIcon from '../../assets/icons/html.png';
import CssIcon from '../../assets/icons/css.png';
import JsIcon from '../../assets/icons/js.png';
import TsIcon from '../../assets/icons/ts.png';
import ReduxIcon from '../../assets/icons/redux.svg';
import AxiosIcon from '../../assets/icons/axios.png';
import ChartJsIcon from '../../assets/icons/chartjs.png';
import I18nIcon from '../../assets/icons/i18n.png';
import GitIcon from '../../assets/icons/git.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`

const SkillsContent = () => {
  return (
    <Wrapper>
      <Description title={'Skills'} icon={SkillsIcon}>
        Skills, in general, refer to a person's ability to perform specific tasks, actions, or activities effectively and efficiently. They encompass a wide range of competencies acquired through learning, training, and experience.
      </Description>
      <GroupButtons
        title={'Frameworks'}
        links={[
          {name: 'React', icon: ReactIcon, bg: '#000000'},
        ]}
      />
      <GroupButtons
        title={'Programming languages'}
        links={[
          {name: 'HTML', icon: HtmlIcon},
          {name: 'CSS', icon: CssIcon},
          {name: 'JavaScript', icon: JsIcon},
          {name: 'TypeScript', icon: TsIcon},
        ]}
      />

      <GroupButtons
        title={'Libraries'}
        links={[
          {name: 'Redux', icon: ReduxIcon},
          {name: 'MUI', icon: MuiIcon},
          {name: 'Axios', icon: AxiosIcon},
          {name: 'Chart.js', icon: ChartJsIcon},
          {name: 'i18n', icon: I18nIcon},
        ]}
      />

      <GroupButtons
        title={'Tools'}
        links={[
          {name: 'Git', icon: GitIcon},
        ]}
      />
    </Wrapper>
  );
};

export default SkillsContent;