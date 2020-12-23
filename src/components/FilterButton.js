import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
  },
}));

const FilterButton = (props) => {
  const classes = useStyles(props);

  // Filter menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, filter) => {
    props.toggleFilter(filter);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tableFilters = ['claimFromIns', 'claimFromSia', 'isDamaged'];

  return (
    <div>
      <Tooltip title="Toggle filters" arrow>
        <IconButton className={classes.iconButton} onClick={handleOpen}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {tableFilters.map((filter, index) => {
          return (
            <MenuItem
              key={index}
              onClick={(event) => {
                handleMenuItemClick(event, filter);
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox checked={props.filters[filter]} color="primary" />
                }
                label={
                  filter === 'claimFromIns'
                    ? 'Claim from insurance'
                    : filter === 'claimFromSia'
                    ? 'Claim from SIA'
                    : 'Damaged before'
                }
              />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default FilterButton;
