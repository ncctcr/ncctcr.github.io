import React, { FC } from 'react';
import Description from '../../../shared/Description';
import SkillsIcon from '../../../../assets/icons/dock/skills.png';
import GroupButtons from '../../../shared/GroupButtons';
import ReactIcon from '../../../../assets/icons/react.png';
import HtmlIcon from '../../../../assets/icons/html.png';
import CssIcon from '../../../../assets/icons/css.png';
import JsIcon from '../../../../assets/icons/js.png';
import TsIcon from '../../../../assets/icons/ts.png';
import ReduxIcon from '../../../../assets/icons/redux.svg';
import MuiIcon from '../../../../assets/icons/mui.png';
import AxiosIcon from '../../../../assets/icons/axios.png';
import ChartJsIcon from '../../../../assets/icons/chartjs.png';
import I18nIcon from '../../../../assets/icons/i18n.png';
import GitIcon from '../../../../assets/icons/git.png';
import Wrapper from '../../../shared/Wrapper';

type TypeProps = {
  onClick?: (view: string) => void;
}

const MainView: FC<TypeProps> = ({ onClick }) => {
  return (
    <Wrapper>
      <Description title={'Skills'} icon={SkillsIcon}>
        Skills, in general, refer to a person's ability to perform specific tasks, actions, or activities effectively and efficiently. They encompass a wide range of competencies acquired through learning, training, and experience.
      </Description>
      <GroupButtons
        title={'Frameworks'}
        links={[
          {name: 'React', icon: ReactIcon, bg: '#000000', key: 'react' },
        ]}
        onClick={onClick}
      />
      <GroupButtons
        title={'Programming languages'}
        links={[
          {name: 'HTML', icon: HtmlIcon, key: 'html' },
          {name: 'CSS', icon: CssIcon, key: 'css' },
          {name: 'JavaScript', icon: JsIcon, key: 'javascript'},
          {name: 'TypeScript', icon: TsIcon, key: 'typescript'},
        ]}
        onClick={onClick}
      />

      <GroupButtons
        title={'Libraries'}
        links={[
          {name: 'Redux', icon: ReduxIcon, key: 'redux'},
          {name: 'MUI', icon: MuiIcon, key: 'mui'},
          {name: 'Axios', icon: AxiosIcon, key: 'axios'},
          {name: 'Chart.js', icon: ChartJsIcon, key: 'chartjs'},
          {name: 'i18n', icon: I18nIcon, key: 'i18n'},
        ]}
        onClick={onClick}
      />

      <GroupButtons
        title={'Tools'}
        links={[
          {name: 'Git', icon: GitIcon, key: 'git'},
        ]}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default MainView;