import React from 'react';
import { Flex, Button } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import ColorModeSwitcher from '../ColorModeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';

const Toolbar = () => {
  const { t } = useTranslation();
  return (
    <Flex
      sx={{
        py: 3,
        '> button': {
          mr: 1
        }
      }}
    >
      <Button>{t('button.newproject')}</Button>
      <Button variant="secondary">{t('button.expandall')}</Button>
      <Button variant="secondary">{t('button.collapseall')}</Button>
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </Flex>
  );
};

export default Toolbar;
