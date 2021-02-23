import React, { FC } from 'react';
import { Flex, Box } from 'theme-ui';

const Tags: FC = () => {
  return (
    <Flex
      sx={{
        button: {
          background: 'none',
          display: 'inline',
          margin: '2px',
          padding: '3px 10px',
          fontSize: '11px',
          lineHeight: '14px',
          fontWeight: 'bold',
          color: 'white',
          whiteSpace: 'nowrap',
          border: 'none',
          cursor: 'pointer',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          opacity: '0.9',
          borderRadius: '10px'
        }
      }}
    >
      <Box sx={{}}>
        <button
          style={{
            backgroundColor: '#E78946'
          }}
        >
          Roamer
        </button>
      </Box>
      <Box>
        <button
          style={{
            backgroundColor: '#40F362' // TODO: color hardcoded
          }}
        >
          iOS
        </button>
      </Box>
    </Flex>
  );
};

export default Tags;
