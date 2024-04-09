import s from './ModalDim.module.scss';

const ModalDim = ({ onClick }) => {
  return <div className={s.backdrop} onClick={onClick} />;
};

export default ModalDim;