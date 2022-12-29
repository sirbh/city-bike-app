import { PedalBike, Menu as MenuIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  const pages = [
    { name: 'Journeys', route: '/' },
    { name: 'Stations', route: '/stations' },
  ];

  return (
    <AppBar position="static" sx={{ width: '100vw' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PedalBike sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="./" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              CityBike
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //   onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              //   anchorEl={anchorElNav}
              //   anchorOrigin={{
              //     vertical: 'bottom',
              //     horizontal: 'left',
              //   }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open
              //   onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.route}
                  key={page.name}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CityBike
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.route}
                key={page.name}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    marginLeft: '20px',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
