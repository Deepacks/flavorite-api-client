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
  optionsContainer: {
    zIndex: 4,
  },
  buttonStyle: {
    backgroundColor: "#313131",
    color: "#fff",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    fontSize: "1.1rem",
    width: "100%",
    padding: "6px 16px",
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
      main: "#313131",
    },
    secondary: {
      main: "#ca3e47 !important",
    },
  },
});

function CardChangeForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fieldsValue, setFieldsValue] = React.useState({
    title: props.title,
    description: props.description,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    const { value, name } = event.target;

    setFieldsValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function handleClick() {
    if (props.python === true) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fieldsValue),
      };

      const res = await fetch(
        "https://favbc.herokuapp.com/bookmarks/" + props.id,
        requestOptions
      );
      props.setResListener(res);
      handleClose();
      props.setMenuClose(false);
    } else if (props.python === false) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fieldsValue),
      };

      const res = await fetch(
        process.env.REACT_APP_API_URL + "/bookmarks/" + props.id,
        requestOptions
      );
      props.setResListener(res);
      handleClose();
      props.setMenuClose(false);
    }
  }

  return (
    <div className={classes.optionsContainer}>
      <Button
        className={["case-fix", classes.buttonStyle].join(" ")}
        onClick={handleClickOpen}
      >
        Modify
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
          <DialogTitle id="form-dialog-title" style={{ color: "#fff" }}>
            Modify bookmark
          </DialogTitle>
          <form noValidate autoComplete="off">
            <DialogContent>
              <TextField
                onChange={handleChange}
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
                color="secondary"
                margin="dense"
                name="title"
                label={"Title - " + props.title}
                type="text"
                variant="outlined"
                fullWidth
              />
              <TextField
                onChange={handleChange}
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
                color="secondary"
                margin="dense"
                name="description"
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
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

export default CardChangeForm;
