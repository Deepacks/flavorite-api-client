import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(() => ({
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
}));

function NoteForm(props) {
  const [open, setOpen] = React.useState(false);
  const [fieldsValue, setFieldsValue] = React.useState({
    title: "",
    url: "",
    description: "",
  });
  const classes = useStyles();

  function handleChange(event) {
    const { value, name } = event.target;

    setFieldsValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fieldsValue),
    };

    if (props.python === true) {
      const res = await fetch(
        "https://favbc.herokuapp.com/bookmarks",
        requestOptions
      );
      props.setResListener(res);
    } else if (props.python === false) {
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/bookmarks",
        requestOptions
      );
      props.setResListener(res);
    }
    handleClose();
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={["button-hover-border", classes.fabButton].join(" ")}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
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
          New bookmark
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
              color="secondary"
              margin="dense"
              name="title"
              label="Title"
              type="text"
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
              color="secondary"
              margin="dense"
              name="url"
              label="Url"
              type="text"
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
              color="secondary"
              margin="dense"
              name="description"
              label="Description (optional)"
              type="text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
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
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default NoteForm;
