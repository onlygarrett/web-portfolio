import s from './BaseModal.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ModalExit } from '../../assets/exit.svg';
import ModalDim from '../Elements/ModalDim/ModalDim';

const BaseModal = ({ children, show, onClose }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    e.stopPropagation();

    onClose();
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={s.container}>
      {show && <ModalDim onClick={closeModal} />}

      <CSSTransition
        in={show}
        timeout={300}
        classNames="basemodal"
        mountOnEnter
        unmountOnExit
      >
        <div className={s.modal}>
          <div className={s.closeWrapper} onClick={closeModal}>
            <button className={s.closeButton}>
              <ModalExit className={s.closeIcon} />
            </button>
          </div>

          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default BaseModal;