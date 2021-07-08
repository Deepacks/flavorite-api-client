import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  bar: {
    backgroundColor: "#313131",
    color: "#e1e5ea",
  },
  title: {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 700,
    fontSize: "2.8rem",
  },
  subTitle: {
    fontFamily: "Dancing Script",
    fontWeight: 700,
    marginTop: 20,
    marginLeft: 5,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} className={classes.bar} position="static">
      <Toolbar className="toolbar-fitter">
        <Typography variant="h6" className={classes.title}>
          Flavorite
        </Typography>
        <Typography variant="h6" className={classes.subTitle}>
          Settings
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
