import React, { FC } from 'react';
import { Text, Flex, Box } from 'theme-ui';
import { Project } from '../../api';

import Progress from '../Progress';
import Stat from '../Stat';
import Actions from '../Actions';
import Tags from '../Tags';
import { useTranslation } from 'react-i18next';

interface Props {
  project: Project;
}

const Sidebar: FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const {
    name,
    statistics: { keys_total, base_words, qa_issues_total, progress_total, team }
  } = project;

  return (
    <Flex
      sx={{
        flexBasis: '180px',
        minWidth: ['100%', '180px'],
        flex: '0 0 180px',
        width: '180px',
        paddingRight: '20px',
        borderRight: '1px solid rgb(229, 227, 227)'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Text variant="textStyles.display">{name}</Text>
        <Flex>
          <Progress progress={progress_total} />
        </Flex>
        <Flex
          sx={{
            flexWrap: 'wrap',
            mb: '20px',
            '> div': {
              flex: '1 1 50%',
              width: '50%',
              margin: '7px 0px'
            }
          }}
        >
          <Stat title={t('done')} value={progress_total} isPercentage />
          <Stat title={t('basewords')} value={base_words} />
          <Stat title={t('team')} value={team} href="#" />
          <Stat title={t('keys')} value={keys_total} />
          <Stat title={t('qaissues')} value={qa_issues_total} href="#" />
        </Flex>
        <Actions />
        <Tags />
      </Box>
    </Flex>
  );
};

export default Sidebar;
