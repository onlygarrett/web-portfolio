import s from './Base.module.scss';
import Main from '../../components/Nav/Main/Main';
import Header from '../../components/Header/Header';
import Particles from '../../components/Elements/Particles/Particles'
import Footer from '../../components/Footer/Footer';

const Base = ({ children }) => {
  return (
    <div className={s.template}>
      <Particles />

      <Header>
        <Main />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default Base;