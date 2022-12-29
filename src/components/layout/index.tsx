import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: '100vh', minWidth: '100vw' }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
