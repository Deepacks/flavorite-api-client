import React from "react";
import axios from "axios";
//material-ui
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  optionsContainer: {
    zIndex: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  icon: {
    fontSize: "1.8rem",
    color: "#e1e5ea",
  },
  optionsMenu: {
    backgroundColor: "#313131",
    color: "#e1e5ea",
    textTransform: "none",
  },
  itemsStyle: {
    fontSize: "1.1rem",
  },
}));

function NavbarOptions(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [resser, setResser] = React.useState();
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  function openSetting() {
    props.setOpensOptions(true);
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleLogout() {
    axios({
      method: "get",
      withCredentials: true,
      url: process.env.REACT_APP_API_URL + "/logout",
    }).then((res) => setResser(res));
  }

  React.useEffect(() => {
    if (resser) {
      if (resser.data.status === 200) {
        window.location.replace("/login");
      }
    }
  }, [resser]);

  return (
    <div className={classes.optionsContainer}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreIcon className={classes.icon} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.optionsMenu}>
              <Box boxShadow={4} style={{ borderRadius: 15 }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      classes={{ root: classes.itemsStyle }}
                      className="case-fix"
                      onClick={openSetting}
                    >
                      Settings
                    </MenuItem>
                    <MenuItem
                      classes={{ root: classes.itemsStyle }}
                      className="case-fix"
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Box>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default NavbarOptions;
