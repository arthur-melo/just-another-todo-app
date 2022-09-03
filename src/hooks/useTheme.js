import { useEffect, useState } from 'react';

const useTheme = () => {
  const [style] = useState(getComputedStyle(document.body));
  const [colors, setColors] = useState({});

  useEffect(() => {
    const theme = {
      primary: style.getPropertyValue('--bs-primary'),
      secondary: style.getPropertyValue('--bs-secondary'),
      success: style.getPropertyValue('--bs-success'),
      info: style.getPropertyValue('--bs-info'),
      warning: style.getPropertyValue('--bs-warning'),
      danger: style.getPropertyValue('--bs-danger'),
      light: style.getPropertyValue('--bs-light'),
      dark: style.getPropertyValue('--bs-dark'),
    };

    setColors(theme);
  }, [style, setColors]);

  return [colors];
};

export default useTheme;
