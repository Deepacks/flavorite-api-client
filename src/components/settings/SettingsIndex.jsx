import React from "react";
import Navbar from "./Navbar";
import VerticalTabs from "./VerticalTabs";
import Exit from "./Exit";
//material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    margin: "12px 4% 0",
  },
}));

function SettingsIndex(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <VerticalTabs />
      <Exit setOpensOptions={props.setOpensOptions} />
    </div>
  );
}

export default SettingsIndex;
