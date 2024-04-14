import s from './Links.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOMEPAGE} end>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUTME}>
          <AiOutlineUser />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PERSONALPROJECTS}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME}>
          <CgFileDocument />
          Resume
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;