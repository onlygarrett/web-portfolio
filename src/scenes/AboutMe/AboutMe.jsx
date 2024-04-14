import s from './AboutMe.module.scss';
import Base from '../../templating/Base/Base'
import aboutPromo from '../../assets/about-promo.svg';
import AboutCard from './AboutCard/AboutCard';
import TechCard from './TechCard/TechCard'
import GithubCard from './GithubCard/GithubCard'

const AboutMe = () => {
  return (
    <Base>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              A little about <b className={s.purple}>ME</b>
            </h1>
            <AboutCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromo} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechCard />

        <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubCard />
      </div>
    </Base>
  );
};

export default AboutMe;