import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TakeoutDining } from '@mui/icons-material';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '4rem' }}
    >
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Sort By:" disabled />
        <Tab
          label="Item Two"
          icon={<TakeoutDining />}
          sx={{ display: 'flex' }}
        />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}
