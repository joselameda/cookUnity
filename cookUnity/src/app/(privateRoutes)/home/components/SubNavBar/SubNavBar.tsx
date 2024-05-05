'use client';

import { type FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SubNavBarProps {
  title: string;
  button: ReactNode;
}

export const SubNavBar: FC<SubNavBarProps> = ({ title, button }) => (
  <Box
    component="nav"
    sx={styles.principalBox}
    alignContent={'center'}
    padding={(theme) => `0px ${theme.spacing(2)}`}
    height="56px">
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      alignItems="center">
      <Typography data-test-id={'subheader-title'}>{title}</Typography>
      <Box>{button}</Box>
    </Box>
  </Box>
);

const styles = {
  principalBox: { backgroundColor: 'grey' },
};
