import React, { FC, useState } from 'react';
import { Box } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import Select, { OptionTypeBase } from 'react-select';

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const options = i18n.options.supportedLngs
    ? i18n.options.supportedLngs.map(l => ({ value: l, label: l }))
    : [{ value: '', label: '' }];

  const currentLang = { value: i18n.language, label: i18n.language };

  const [selectedLangs, setSelectedLangs] = useState<OptionTypeBase>(currentLang);

  const changeLanguage = (lngOption: OptionTypeBase) => {
    setSelectedLangs(lngOption);
    i18n.changeLanguage(lngOption.value);
  };

  return (
    <Box
      sx={{
        minWidth: 5,
        ml: 'auto'
      }}
    >
      <Select value={selectedLangs} onChange={changeLanguage} options={options} />
    </Box>
  );
};

export default LanguageSwitcher;
