import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    color: "#e1e5ea",
    "&:hover": {
      color: "#ca3e47",
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#313131",
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: "#ca3e47",
  },
  customPaper: {
    backgroundColor: "#414141",
    width: 700,
  },
  white: {
    color: "rgba(255, 255, 255, 0.6) !important",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    borderColor: "rgba(255, 255, 255, 0.3) !important",
  },
  button: {
    color: "#fff",
    fontSize: "1rem",
    "&:hover": {
      color: "#ca3e47",
    },
  },
  dialogStyle: {
    paddingRight: 16,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca3e47 !important",
    },
  },
});

function CardDescriptionForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [descriptionValue, setDescriptionValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const editDescription = async () => {
    if (props.python === true) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: descriptionValue,
        }),
      };
      const res = await fetch(
        "https://favbc.herokuapp.com/bookmarks/" + props.id,
        requestOptions
      );
      props.setResListener(res);
    } else if (props.python === false) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: descriptionValue,
        }),
      };
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/bookmarks/" + props.id,
        requestOptions
      );
      props.setResListener(res);
    }
  };

  return (
    <div>
      <Button className={classes.buttonStyle} onClick={handleClickOpen}>
        Add description
      </Button>
      <MuiThemeProvider theme={theme}>
        <Dialog
          classes={{
            paper: classes.customPaper,
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          id="dialog-fix"
        >
          <DialogTitle
            id="form-dialog-title"
            style={{ color: "#fff", paddingBottom: 0 }}
          >
            Add description
          </DialogTitle>
          <form noValidate autoComplete="off">
            <DialogContent>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.white,
                  },
                }}
                InputProps={{
                  classes: {
                    notchedOutline: classes.white,
                  },
                  className: classes.white,
                }}
                color="primary"
                margin="dense"
                id="outlined-basic"
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions className={classes.dialogStyle}>
              <Button
                onClick={handleClose}
                className={["case-fix", classes.button].join(" ")}
              >
                Cancel
              </Button>
              <Button
                onClick={editDescription}
                className={["case-fix", classes.button].join(" ")}
              >
                Confirm
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
}

export default CardDescriptionForm;
