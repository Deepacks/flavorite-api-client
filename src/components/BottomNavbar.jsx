import React from "react";
import NoteForm from "./NoteForm";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#ca3e47 !important",
    },
  },
});

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#313131",
  },
}));

function BottomNavbar(props) {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="primary"
      className={classes.appBar}
    >
      <Toolbar>
        <MuiThemeProvider theme={theme}>
          <NoteForm python={props.python} setResListener={props.setResListener} />
        </MuiThemeProvider>
      </Toolbar>
    </AppBar>
  );
}

export default BottomNavbar;
