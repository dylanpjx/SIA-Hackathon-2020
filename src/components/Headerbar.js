import React, { useState } from 'react';
import FilterButton from './FilterButton';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchField: {
    display: 'flex',
    // margin: 'auto 20vw',
    padding: '2px 4px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
  },
  iconButton: {
    padding: 10,
  },
}));

const Headerbar = (props) => {
  const classes = useStyles(props);

  // Handle search
  const onChange = (e) => {
    props.updateSearch(e.target.value.trim());
  };

  // Search menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    props.switchMode(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Labels
  const searchMode = ['Baggage ID', 'Passenger Name'];
  const placeholder = ['Input baggage ID', 'Input passenger name'];

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        {/* Header */}
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Baggage Claims
        </Typography>
        {/* Search bar */}
        <div style={{ display: 'flex' }}>
          <Paper className={classes.searchField}>
            <Tooltip title="Change search mode" arrow>
              <IconButton className={classes.iconButton} onClick={handleOpen}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="search-mode"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {searchMode.map((mode, index) => {
                return (
                  <MenuItem
                    key={index}
                    selected={index === props.searchMode}
                    onClick={(event) => {
                      handleMenuItemClick(event, index);
                    }}
                  >
                    {mode}
                  </MenuItem>
                );
              })}
            </Menu>
            <InputBase
              onChange={onChange}
              placeholder={placeholder[props.searchMode]}
            />
            <IconButton className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
          </Paper>
          <FilterButton
            filters={props.filters}
            toggleFilter={props.toggleFilter}
          />
        </div>
      </Toolbar>
    </div>
  );
};

export default Headerbar;
