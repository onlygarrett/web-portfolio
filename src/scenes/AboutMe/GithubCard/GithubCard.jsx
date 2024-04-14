import s from './GithubCard.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubCard = () => {
  const colorTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="onlygarrett"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        colorScheme='dark'
        fontSize={16}
      />
    </div>
  );
};

export default GithubCard;