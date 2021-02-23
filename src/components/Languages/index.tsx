import React, { FC } from 'react';
import { Flex, Button } from 'theme-ui';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import LanguageCard from '../Language';
import AddLangForm from '../AddLangForm';

import { useModal } from '../Modal';
import { Language } from '../../api';
import { selector } from '../../store/languages';

interface Props {
  langs: Language[];
}

const Languages: FC<Props> = ({ langs }) => {
  const { isVisible, toggle, Modal } = useModal();
  const systemLanguages = useSelector(selector.system);
  const { t } = useTranslation();
  return (
    <Flex
      sx={{
        flexFlow: 'wrap',
        flex: '1 1 100%',
        px: '15px',
        alignItems: 'center',
        justifyContent: ['center', 'center', 'normal']
      }}
    >
      {langs.map(l => (
        <LanguageCard
          key={l.language_id}
          name={systemLanguages.find(i => i.lang_id === l.language_id)?.lang_name}
          iso={l.language_iso}
          progress={l.progress}
          toDo={l.words_to_do}
          unverified={l.words_to_do}
        />
      ))}
      <Button
        data-testid="button.addlanguage"
        variant="secondary"
        sx={{
          m: '15px',
          maxHeight: '30px',
          display: 'flex',
          alignItems: 'center'
        }}
        onClick={toggle}
      >
        {t('button.addlanguage')}
      </Button>
      <Modal isVisible={isVisible}>
        <AddLangForm toggle={toggle} />
      </Modal>
    </Flex>
  );
};

export default Languages;
