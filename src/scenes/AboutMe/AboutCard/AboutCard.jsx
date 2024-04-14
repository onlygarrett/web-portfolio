import s from './AboutCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Garrett Rumschik </span>
        from <span className={s.purple}> Ternopil, Ukraine.</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React Native.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and
        <br />
        Master's degree in Project Management from Ternopil Academy.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutCard;