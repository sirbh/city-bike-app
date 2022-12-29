import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

interface ITabs {
  tabsDetails: {
    name: string;
    value: string;
    order: string;
  }[];
  seletedTab: number;
  onTabClick: (newValue: number) => void;
}

function getLabel(order: string) {
  if (order === 'asc') {
    return <ArrowDownward />;
  }

  return <ArrowUpward />;
}

export default function CenteredTabs({
  tabsDetails,
  seletedTab,
  onTabClick,
}: ITabs) {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        margin: '2rem 0rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{ display: 'inline-block', margin: '0rem 1rem' }}
      >
        Sort By:
      </Typography>
      {tabsDetails.map((tab, i) => {
        return (
          <Button
            key={tab.value}
            onClick={() => {
              onTabClick(i);
            }}
            endIcon={seletedTab === i ? getLabel(tab.order) : undefined}
            sx={{ marginLeft: '1rem' }}
            variant={seletedTab === i ? 'contained' : 'outlined'}
          >
            {tab.name}
          </Button>
        );
      })}
    </Box>
  );
}
