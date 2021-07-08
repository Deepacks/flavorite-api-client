import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
//material-ui
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    backgroundColor: "#525252",
    borderRadius: "100%",
    height: "60px !important",
    width: "60px !important",
    padding: 6,
    color: "rgba(0, 0, 0, 0.54)",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.84)",
    },
  },
  snackbarStyle: {
    backgroundColor: "#313131",
    color: "#fff",
    border: "1px solid #fff",
  },
  actionStyle: {
    display: "none",
  },
  messageStyle: {
    marginRight: 5,
    fontSize: "1.2rem",
  },
  iconStyle: {
    color: "#fff !important",
    marginTop: 3,
  },
}));

function ClipboardButton(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  function Alert(props) {
    return (
      <MuiAlert
        classes={{
          outlinedSuccess: classes.snackbarStyle,
          action: classes.actionStyle,
          message: classes.messageStyle,
          icon: classes.iconStyle,
        }}
        elevation={6}
        variant="outlined"
        {...props}
      />
    );
  }

  return (
    <div className={classes.root}>
      <CopyToClipboard text={props.url}>
        <Button
          aria-label="share"
          className={classes.button}
          onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
        >
          <FileCopyIcon />
        </Button>
      </CopyToClipboard>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose}>Copied</Alert>
      </Snackbar>
    </div>
  );
}

export default ClipboardButton;
