import s from './Drawer.module.scss';
import { CSSTransition } from 'react-transition-group';
import Backgrounds from '../../Elements/Backgrounds/Backgrounds';

const Drawer = ({ children, show, onClose }) => {
  return (
    <>
      {show && <Backgrounds onClick={onClose} />}

      <CSSTransition
        in={show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <aside className={s.drawer} onClick={onClose}>
          {children}
        </aside>
      </CSSTransition>
    </>
  );
};

export default Drawer;