import React, { FC, useState } from 'react';
import { Flex, Button, Box } from 'theme-ui';
import { useDispatch, useSelector } from 'react-redux';
import Select, { OptionTypeBase } from 'react-select';
import { useTranslation } from 'react-i18next';

import { addLanguages, selector } from '../../store/languages';
import { Project } from '../../api';
import { useProject } from '../../ctx/ProjectContext';

interface Props {
  projects?: Project[];
  toggle: () => void;
}

const AddLangForm: FC<Props> = ({ toggle, projects }) => {
  const dispatch = useDispatch();
  const { projectId } = useProject();
  const { t } = useTranslation();

  const systemLanguages = useSelector(selector.system);
  const [selectedLangs, setSelectedLangs] = useState<OptionTypeBase>([]);

  const options = systemLanguages?.map(l => ({ value: l.lang_iso, label: l.lang_name }));

  const addNewLanguage = () => {
    const langs = selectedLangs.map((l: any) => ({ lang_iso: l.value }));

    if (projectId) {
      dispatch(
        addLanguages({
          projectId,
          langs
        })
      );
    }

    toggle();
  };

  return (
    <>
      <Box as="header">{t('button.addlanguage')}</Box>
      <Flex>
        <Box as="form" sx={{ flex: '1 0 100%', mb: '1.5rem' }}>
          <Select value={selectedLangs} onChange={setSelectedLangs} options={options} isMulti />
        </Box>
      </Flex>
      <Flex
        as="footer"
        sx={{
          justifyContent: 'flex-end'
        }}
      >
        <Button
          variant="secondary"
          onClick={toggle}
          sx={{
            mr: '10px'
          }}
        >
          {t('button.close')}
        </Button>
        <Button disabled={!selectedLangs.length} onClick={addNewLanguage}>
          {t('button.add')}
        </Button>
      </Flex>
    </>
  );
};

export default AddLangForm;
