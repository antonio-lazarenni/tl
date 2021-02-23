import React, { FC } from 'react';
import { Flex, Box, Link } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import { emojiFromIso } from '../../utils';

import Progress from '../Progress';
import Stat from '../Stat';

interface LanguageProps {
  iso: string;
  progress: number;
  toDo: number;
  unverified: number;
  name?: string;
}
const Language: FC<LanguageProps> = ({ name, iso, progress, toDo, unverified }) => {
  const { t } = useTranslation();

  const flag = emojiFromIso(iso);
  const langName = name ?? 'loading...';

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        maxWidth: ['100%', '100%', '100%', '50%', '33%', '25%', '20%'],
        p: '15px'
      }}
    >
      <Flex>
        <Flex>
          <Link
            href="#"
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              display: 'inline-block',
              overflow: 'hidden',
              color: 'rgb(84, 137, 220)',
              width: '100%',
              textDecoration: 'none',
              '> span': {
                mr: '.5rem'
              }
            }}
          >
            <Box as="span">{`${flag}`}</Box>
            <Box as="span">{`${langName}`}</Box>
          </Link>
        </Flex>
      </Flex>
      <Progress progress={progress} />
      <Flex
        sx={{
          justifyContent: 'space-between',
          '> div': {
            flex: '1',
            '&:last-child': {
              textAlign: 'right'
            }
          }
        }}
      >
        <Stat value={progress} title={t('done')} isPercentage />
        <Stat value={toDo} title={t('wordstodo')} />
        <Stat value={unverified} title={t('unverified')} />
      </Flex>
    </Flex>
  );
};

export default Language;
