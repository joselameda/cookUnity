import { Box, Tab, Tabs } from '@mui/material';
import { FC, ReactNode, SyntheticEvent } from 'react';
import { useAppContext } from '@/context/AppContext/AppContext';
import { TAB_MENU } from '@/enums/TAB_MENU';
import { Date } from '@/services/types/Date.ts';
import { callApiGatewayClientSide } from '@/app/api/callApiClientSide.ts';
import { Product } from '@/services/types/Product.ts';

interface NavBarProps {
  muiButtonChild: ReactNode;
  cookUnityDates: Date[];
}

export const NavBar: FC<NavBarProps> = ({ muiButtonChild, cookUnityDates }) => {
  const { activeTab, setActiveTab, setProducts } = useAppContext();

  const handleChange = async (_event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue as TAB_MENU);
    const newProducts = await callApiGatewayClientSide(
      `/api?dateValue=${newValue}`,
      {
        method: 'GET',
      },
    );
    setProducts((newProducts.data as Product[]) || []);
  };

  return (
    <Box component="nav" sx={styles.nav}>
      <Tabs
        onChange={handleChange}
        value={activeTab}
        TabIndicatorProps={styles.tabIndicator}
        classes={{ flexContainer: 'tabs MuiTabs-flexContainer' }}
        sx={styles.tabs}>
        {cookUnityDates.map(({ id, name, value }) => (
          <Tab key={id} label={name} value={value} sx={styles.tab} />
        ))}
      </Tabs>
      <Box>{muiButtonChild}</Box>
    </Box>
  )
};

const styles = {
  nav: {
    backgroundColor: 'black',
    paddingX: 2,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabs: {
    color: 'white',
  },
  tabIndicator: {
    style: {
      backgroundColor: 'gold',
    },
  },
  tab: {
    color: 'white',
    fontSize: '1.3rem',
    minWidth: 200,
    paddingX: 2,
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
    },
  },
};
