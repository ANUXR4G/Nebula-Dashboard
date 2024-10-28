import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import logo from "../../../assets/nebula.png";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='bg-[#4c5d34] h-screen'>
      <Toolbar className='bg-[#4c5d34]'/>
      <img src={logo} alt="Logo" />
      <Divider className='bg-[#4c5d34]'/>
      <List className='bg-[#4c5d34]'>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/custom-mentors-path">
            <ListItemIcon>
              <GroupIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Mentors" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/problem-statement">
            <ListItemIcon>
              <AssignmentIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Problem Statement" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/calender">
            <ListItemIcon>
              <CalendarTodayIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Calendar" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List className='bg-[#4c5d34]'>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/profile">
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Profile" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-[#4c5d34]'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;