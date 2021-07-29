import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#0072ffd1",
    color: "#fff",
    "&:hover": {
      background: "#0072ffd1",
    },
  },
}));
const DropDown = ({ handleChange, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeHandler = (item) => {
    handleChange(item);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        onClick={handleClick}
        className={classes.button}
        endIcon={<ArrowDropDown />}
      >
        item
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items &&
          items.map((item, index) => (
            <MenuItem
              key={index}
              value={item}
              onClick={() => changeHandler(item)}
            >
              {item}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default DropDown;
