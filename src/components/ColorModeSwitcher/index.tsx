import React, { FC } from 'react';
import { Button, useColorMode } from 'theme-ui';

const ColorModeSwitcher: FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      variant="secondary"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      {colorMode === 'default' ? '🌚' : '🌞'}
    </Button>
  );
};

export default ColorModeSwitcher;
