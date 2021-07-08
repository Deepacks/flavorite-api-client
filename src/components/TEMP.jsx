import React from "react";
//material-ui
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: "fit-content",
    width: "fit-content",
    textAlign: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  button: {
    backgroundColor: "#313131",
    height: 150,
    borderRadius: "100%",
    border: "1px solid #313131",
    margin: "20px 50px",
    transition: "0.3s",
    "&:hover": {
      background: "radial-gradient(#ca3e4799 5%, #313131 78%)",
      borderColor: "#11111144",
    },
  },
  test: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
    color: "#ffffff55",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ca3e47",
  },
}));

function TEMP() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handlePython = async () => {
    handleToggle();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        python: true,
      }),
    };
    await fetch(process.env.REACT_APP_API_URL + "/switch", requestOptions);
    setTimeout(() => {
      handleClose();
      document.theForm.submit();
    }, 1000);
  };

  const handleNode = async () => {
    handleToggle();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        python: false,
      }),
    };
    await fetch(process.env.REACT_APP_API_URL + "/switch", requestOptions);
    setTimeout(() => {
      handleClose();
      document.theForm.submit();
    }, 1000);
  };

  return (
    <div>
      <div className={classes.containerStyle}>
        <div>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className={classes.title}
          >
            Choose{" "}
            <section style={{ display: "inline-block", color: "#ca3e47" }}>
              API
            </section>
          </Typography>
        </div>
        <div>
          <form action="/login" name="theForm">
            <Button
              variant="contained"
              disableElevation={true}
              classes={{ root: classes.button }}
              onClick={handlePython}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                alt="python"
                style={{ width: 120 }}
              />
            </Button>
            <Button
              variant="contained"
              disableElevation={true}
              classes={{ root: classes.button }}
              onClick={handleNode}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                alt="nodejs"
                style={{ width: 120 }}
              />
            </Button>
          </form>
        </div>
      </div>
      <div className={classes.test}>
        <p>This page is for testing purposes</p>
        <p>Go to root to change API at any time</p>
      </div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default TEMP;
