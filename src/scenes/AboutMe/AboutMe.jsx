import s from './AboutMe.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromo from '../../assets/about-promo.svg';
import AboutCard from './AboutCard/AboutCard';
import TechCard from './TechCard/TechCard'
import GithubActivity from './GithubActivity/GithubActivity';

const AboutMe = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know Who <b className={s.purple}>I'M</b>
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
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default AboutMe;