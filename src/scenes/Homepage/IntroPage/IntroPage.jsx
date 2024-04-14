import s from './IntroPage.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroPage = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a Software developer with over 6 years of experience
              <br />
              developing for various sized stacks ranging from Enterprise level to
              ground-floor startup.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  Python, Cloud Services, Data Structures,
                </b>
              </i>
              <br />
              and other relevant development tools abd services. 
              I have experience in maintaining and deploying API's, <br />
              supporting front-end/mobile developers, and setting up 
              various automations infrastructures.  
            </p>

            <p>
              My field of Interest's are developing 
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/onlygarrett"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/garrett-rumschik/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="rumschik.2@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="email"
            >
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroPage;