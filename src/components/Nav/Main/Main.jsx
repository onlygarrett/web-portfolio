import s from './Main.module.scss';
import { useState } from 'react';
import Media from 'react-media';
import Links from '../Links/Links';
import Drawer from '../Drawer/Drawer';
import Burger from '../Burger/Burger';
// eslint-disable-next-line no-unused-vars
import ButtonComp from '../../ButtonComp/ButtonComp';
import Icon from '../../Icon/Icon';

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Icon className={s.desktop} />

      <nav className={s.desktop}>
        <Links />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />

            <Icon className={s.mobile} />

          </>
        )}
      </Media>

      <Drawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <Links />
        </nav>
      </Drawer>
    </>
  );
};

export default Main;