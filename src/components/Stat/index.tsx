/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { FC } from 'react';
import { Flex, Box } from 'theme-ui';

interface StatProps {
  title: string;
  value: number;
  isPercentage?: boolean;
  href?: string;
}
const Stat: FC<StatProps> = ({ title, value, isPercentage = false, href }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        '> h3': {
          fontSize: '10px',
          lineHeight: '12px',
          textTransform: 'uppercase',
          color: 'rgb(142, 142, 142)',
          whiteSpace: 'nowrap',
          fontWeight: '100'
        },
        a: {
          textDecoration: 'none',
          color: 'primary'
        }
      }}
    >
      <Box as="h3">{`${title}`}</Box>
      <Box as="span">
        {href ? <a href="#">{`${value}${isPercentage ? '%' : ''}`}</a> : `${value}${isPercentage ? '%' : ''}`}
      </Box>
    </Flex>
  );
};

export default Stat;
