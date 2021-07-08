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
    position: "relative",
    bottom: 5,
    left: 20,
    color: "#fff !important",
    borderColor: "#e1e5ea",
    textTransform: "none",
    transition: "0.3s",
    "&:hover": {
      color: "#ca3e47 !important",
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

function ChangePassword(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [passwords, setPasswords] = React.useState({
    password: "",
    check: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPasswords((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    if (passwords.password !== passwords.check) {
      alert("Passwords do not match");
      setPasswords({
        password: "",
        check: "",
      });
    } else if (passwords.password === passwords.check) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passwords.password),
      };
      const res = await fetch("//no-url", requestOptions);
      props.setResListener(res);
      handleClose();
    }
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Button
          className={classes.buttonStyle}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Change password
        </Button>
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
            Change password
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
                label="New password"
                name="password"
                value={passwords.password}
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
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
                label="Repeat password"
                name="check"
                value={passwords.check}
                type="password"
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
                onClick={handleClick}
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

export default ChangePassword;
