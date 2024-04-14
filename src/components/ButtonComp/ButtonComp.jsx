import { useMemo } from 'react';
import s from './ButtonComp.module.scss';
import Button from '../Elements/Button/Button';
import { ReactComponent as ToggleLightIcon } from '../../assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../../assets/toggle-dark.svg';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const ButtonComp = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? ToggleDarkIcon : ToggleLightIcon),
    [dark],
  );

  return (
    <Button
      addClass={className}
      onClick={toggleTheme}
      label="theme toggle"
    >
      <ToggleThemeIcon className={s.toggleTheme} />
    </Button>
  );
};

export default ButtonComp;