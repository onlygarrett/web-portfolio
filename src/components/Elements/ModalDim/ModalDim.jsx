import s from './ModalDim.module.scss';

const ModalDim = ({ onClick }) => {
  return <div className={s.modalDim} onClick={onClick} />;
};

export default ModalDim;