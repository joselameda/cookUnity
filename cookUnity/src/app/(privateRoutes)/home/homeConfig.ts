import { TAB_MENU } from '@/enums/TAB_MENU.ts';

export const configPage = [
  {
    tab: TAB_MENU.Confirm,
    subNavBarTitle: 'Confirm your order',
    buttonLabel: 'Confirm',
    onClick: () => alert('Confirmed'),
    dataTestId: {
      header: 'header-cta',
      subheader: 'subheader-cta',
    },
  },
  {
    tab: TAB_MENU.Reschedule,
    subNavBarTitle: 'Reschedule your order',
    buttonLabel: 'Reschedule',
    onClick: () => alert('Rescheduled'),
    dataTestId: {
      header: 'header-cta',
      subheader: 'subheader-cta',
    },
  },
];

export const defaultConfig = {
  tab: TAB_MENU.Confirm,
  subNavBarTitle: '',
  products: [],
  buttonLabel: '',
  onClick: () => {},
  dataTestId: {
    header: '',
    subheader: '',
  },
  orderNumber: 0,
};
