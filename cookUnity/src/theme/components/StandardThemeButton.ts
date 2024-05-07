import { Components } from '@mui/material';

import { COLOR_GOLD_PRIMARY } from '../colors';
import {
  buttonSmall,
  buttonMedium,
  buttonLarge,
} from '@/theme/variants';

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    color: 'defaultButton',
    variant: 'contained',
  },
  styleOverrides: {
    colorPrimary: COLOR_GOLD_PRIMARY,
    outlined: {
      '&.MuiButton-outlinedStandard': {
        borderColor: COLOR_GOLD_PRIMARY,
        color: COLOR_GOLD_PRIMARY,
      },
    },
    sizeSmall: {
      ...buttonSmall,
    },
    sizeMedium: {
      ...buttonMedium,
    },
    sizeLarge: {
      ...buttonLarge,
    },
    root: {
      textTransform: 'none',
    },
  },
};

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    defaultButton: true;
  }
}

export default MuiButton;
