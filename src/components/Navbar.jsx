import React from "react";
import ReactDOM from "react-dom";
import NavbarOptions from "./NavbarOptions";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#313131",
    color: "#e1e5ea",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 700,
    fontSize: "2.8rem",
  },
  search: {
    marginRight: "10px",
  },
  searchBar: {
    color: "#e1e5ea",
    fontSize: "1.4rem",
  },
  icon: {
    fontSize: "1.8rem",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  function searchRender() {
    ReactDOM.render(
      <div>
        <div className={classes.search}>
          <InputBase
            id="SearchBar"
            placeholder="Search…"
            className={classes.searchBar}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>,
      document.getElementById("searchBar")
    );
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.bar} position="static">
        <Toolbar className="toolbar-fitter">
          <Typography variant="h6" className={classes.title}>
            Flavorite
          </Typography>
          <div id="searchBar"></div>
          <IconButton
            className={classes.search}
            color="inherit"
            onClick={searchRender}
          >
            <SearchIcon className={classes.icon} />
          </IconButton>
          <NavbarOptions setOpensOptions={props.setOpensOptions} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
