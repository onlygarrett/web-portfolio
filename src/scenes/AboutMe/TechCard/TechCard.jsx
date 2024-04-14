import s from './TechCard.module.scss';
import {
  DiJavascript1,
  DiPython,
  DiLinux,
  DiDocker,
  DiDatabase,
  DiRedis
} from 'react-icons/di';
import {
  SiAwslambda,
  SiAmazonaws,
  SiMysql,
} from 'react-icons/si';

const TechCard = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiLinux />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <DiDatabase />
      </li>
      <li className={s.techIcon}>
        <DiDocker />
      </li>
      <li className={s.techIcon}>
        <DiRedis />
      </li>
      <li className={s.techIcon}>
        <SiAwslambda />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
    </ul>
  );
};

export default TechCard;