import React from "react";
import Navbar from "./Navbar";
import VerticalTabs from "./VerticalTabs";
import Exit from "./Exit";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles(() => ({
  container: {
    margin: "12px 4% 0",
  },
  test: {
    position: "absolute",
    top: 24,
    left: 330,
    marginRight: 20,
    fontFamily: "Roboto",
    color: "#ca3e47",
  },
}));

function SettingsIndex(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <VerticalTabs />
      <Exit setOpensOptions={props.setOpensOptions} />
      <div className={classes.test}>
        <p>
          <ErrorIcon style={{ position: "relative", top: 7, marginRight: 5 }} />
          this is a work in progress
        </p>
      </div>
    </div>
  );
}

export default SettingsIndex;
