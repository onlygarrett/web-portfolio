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

        I am <span className={s.purple}>Software developer </span> with expertise in backend development and automation,{' '}
        maintaining and deploying API's, and developing with various Cloud Services.
        <br />
        <br />
        I have a Bachelor's degree in Computer Information Science 
        from The Ohio State University.
        <br />
        
        <br />
        
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Live music
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Traveling with my dog
        </li>
      </ul>
    </div>
  );
};

export default AboutCard;