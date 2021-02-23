import { FC } from 'react';
import { Box } from 'theme-ui';

interface ProgressProps {
  progress: number;
}
const Progress: FC<ProgressProps> = ({ progress }) => {
  let color = progress < 20 ? 'red' : progress > 80 ? 'blue' : 'yellow';

  return (
    <Box
      sx={{
        width: '100%',
        height: '2px',
        backgroundColor: 'muted',
        margin: '6px 0px 8px'
      }}
    >
      <Box
        sx={{
          width: `${progress}%`,
          height: '2px',
          backgroundColor: color
        }}
      ></Box>
    </Box>
  );
};

export default Progress;
