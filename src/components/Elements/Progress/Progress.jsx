import cx from 'classnames';
import s from './Progress.module.scss'

const Progress = () => {
  return (
    <div className={s.linearProgress}>
      <div className={cx(s.bar, s.bar1)} />
      <div className={cx(s.bar, s.bar2)} />
    </div>
  );
};

export default Progress;