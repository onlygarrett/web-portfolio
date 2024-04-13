import s from './Backgrounds.module.scss';

const Backgrounds = ({ children }) => {
  return <div className={s.Backgrounds}>{children}</div>;
};

export default Backgrounds;