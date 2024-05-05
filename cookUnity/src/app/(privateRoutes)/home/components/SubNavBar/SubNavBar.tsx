'use client';

import { type FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SubNavBarProps {
  title: string;
  button: ReactNode;
}

export const SubNavBar: FC<SubNavBarProps> = ({ title, button }) => (
  <Box component="nav" sx={styles.principalBox} alignContent={'center'}>
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      alignItems="center">
      <Typography sx={styles.title} data-test-id={'subheader-title'}>
        {title}
      </Typography>
      <Box sx={styles.button}>{button}</Box>
    </Box>
  </Box>
);

const styles = {
  principalBox: { backgroundColor: '#eeeeee', padding: '8px 10px', height: 56 },
  title: { fontSize: '30px', fontWeight: 'bold' },
  button: { padding: '8px 10px' }
};
