import React from "react";
import CardChangeForm from "./CardChangeForm";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles(() => ({
  paperStyle: {
    color: "#fff",
    backgroundColor: "#313131",
    filter: "none",
  },
  itemsStyle: {
    fontSize: "1.1rem",
  },
  delete: {
    "&:hover": {
      color: "#ca3e47",
    },
  },
}));

function CardOptions(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
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

  async function handleClick() {
    if (props.python === true) {
      const res = await fetch(
        "https://favbc.herokuapp.com/bookmarks/" + props.id,
        { method: "DELETE" }
      );
      props.setResListener(res);
    } else if (props.python === false) {
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/bookmarks/" + props.id,
        {
          method: "DELETE",
        }
      );
      props.setResListener(res);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={props.class}
      >
        <MoreVertIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal={false}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper classes={{ root: classes.paperStyle }}>
              <Box boxShadow={4} style={{ borderRadius: 15 }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <CardChangeForm
                      id={props.id}
                      title={props.title}
                      description={props.description}
                      setResListener={props.setResListener}
                      setMenuClose={setOpen}
                      python={props.python}
                    />
                    <MenuItem
                      classes={{ root: classes.itemsStyle }}
                      className={classes.delete}
                      onClick={handleClick}
                    >
                      Delete
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

export default CardOptions;
