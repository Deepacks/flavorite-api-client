import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  deleteButton: {
    textTransform: "none",
    margin: "44px 66px",
    borderColor: "#ca3e47aa",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#ca3e47",
      color: "#000 !important",
    },
  },
  customPaper: {
    backgroundColor: "#414141",
    width: 550,
  },
  negativeButton: {
    textTransform: "none",
    color: "#e1e5ea",
    fontSize: "1.4rem",
    borderColor: "#e1e5ea",
    transition: "0.3s",
    width: 120,
    marginLeft: 120,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
    },
  },
  positiveButton: {
    textTransform: "none",
    color: "#000",
    backgroundColor: "#ca3e47cc !important",
    fontSize: "1.4rem",
    transition: "0.3s",
    width: 120,
    marginRight: 120,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ca3e47 !important",
    },
  },
  dialogStyle: {
    width: "100%",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca3e47 !important",
    },
  },
});

function DeleteAccount() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async () => {
    /*  
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.user_id),
      };
      const res = await fetch("//no-url", requestOptions);
    }
    */
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Button
          className={classes.deleteButton}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Delete account
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
            style={{
              color: "#fff",
              paddingBottom: 0,
              margin: "25px 0 25px",
              textAlign: "center",
            }}
          >
            Are you shure you want to delete your accout?
          </DialogTitle>
          <form noValidate autoComplete="off" action="/login">
            <DialogActions>
              <div className={classes.dialogStyle}>
                <table style={{ width: "100%", marginBottom: 17 }}>
                  <tbody>
                    <tr align="center">
                      <td>
                        <Button
                          onClick={handleClose}
                          className={classes.negativeButton}
                          variant="outlined"
                        >
                          No
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="submit"
                          onClick={handleClick}
                          className={classes.positiveButton}
                          variant="contained"
                          color="primary"
                        >
                          Yes
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogActions>
          </form>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
}

export default DeleteAccount;
