import React from "react";
//material-ui
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  conatainerStyle: {
    textAlign: "center",
  },
  rootStyle: {
    marginTop: 150,
    "&:hover": {
      backgroundColor: "#ca3e47",
    },
  },
  labelStyle: {
    textTransform: "none",
    color: "#e1e5ea",
    margin: "0 20px",
  },
}));

function Exit(props) {
  const classes = useStyles();

  const handleExit = () => {
    props.setOpensOptions(false);
  };

  return (
    <div className={classes.conatainerStyle}>
      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button
          classes={{ root: classes.rootStyle, label: classes.labelStyle }}
        >
          Revert changes
        </Button>
        <Button
          classes={{ root: classes.rootStyle, label: classes.labelStyle }}
          onClick={handleExit}
        >
          Save and close
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Exit;
