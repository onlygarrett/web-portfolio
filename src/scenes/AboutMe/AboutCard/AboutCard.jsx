import s from './AboutCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello visitor, my name is{' '}
        <span className={s.purple}>Garrett Rumschik </span>
        and <span className={s.purple}> this is a little showcase of me..</span>
        <br />
        <br />

        I am <span className={s.purple}>Software developer </span> with extensive expertise in backend development and system architecture.
        <br />
        <br />
        Proficient in designing and maintaining application APIs for smooth downstream integration, and leading backend enhancements to improve system scalability and data retrieval efficiency. 
        <br />
        <br />
        I have years of experience working on <span className={s.purple}>large projects</span> such as leading the adoption and integration of 
        <span className={s.purple}>Cloud-Native Application Protection Platforms</span> and developing <span className={s.purple}>automation solutions</span> to interface with numerous platforms.
        As well as working on <span className={s.purple}>small teams</span> centered around <span className={s.purple}>developing and deploying</span> products from the ground up with the collaboration of other developers and project managers.
        <br />
        
        <br />
        
        Recently, looking to find a development role that centers around product development as I love the process of designing and creating projects on the ground floor.
        <br />
        <hr />
      </p>

      <span className={s.purple}>Few words</span> that describe me as a <span className={s.purple}>developer</span> are:
      <br />
      <br />
      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Love learning new skills
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Passionate about creating resilient and efficient applications
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reliable
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Comfortable working in both a team and alone
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Love collaborating with other developers on projects
        </li>
      </ul>
    </div>
  );
};

export default AboutCard;