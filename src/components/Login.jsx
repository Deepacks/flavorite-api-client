import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ErrorIcon from "@material-ui/icons/Error";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca3e47 !important",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: "35%",
    height: "fit-content",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  title: {
    fontFamily: "Ubuntu, sans-serif",
  },
  paperStyle: {
    backgroundColor: "#313131",
  },
  warning: {
    textAlign: "left",
    color: "#ca3e47",
  },
  content: {
    paddingTop: "8px !important",
  },
  white: {
    color: "rgba(255, 255, 255, 0.6) !important",
    borderColor: "rgba(255, 255, 255, 0.3) !important",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  },
  buttonStyle: {
    margin: "0 16px",
    backgroundColor: "#ca3e47cc",
    "&:hover": {
      backgroundColor: "#ca3e47",
    },
  },
  labelStyle: {
    textTransform: "none",
  },
  registerStyle: {
    backgroundColor: "#313131",
    margin: "10px 24px 0",
    padding: "15px 20px",
  },
  anchorStyle: {
    color: "#ca3e47cc",
    "&:hover": {
      color: "#ca3e47",
    },
  },
  tempRoute: {
    color: "#ca3e47",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const [resStatus, setResStatus] = React.useState({
    data: {
      status: undefined,
    },
  });
  const [warning, setWarning] = React.useState("");
  const [fieldsValue, setFieldsValue] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFieldsValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleLogin = () => {
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(fieldsValue),
    };
    fetch(process.env.REACT_APP_API_URL + "/login", requestOptions)
      .then((response) => response.json())
      .then((data) => setResStatus(data));
  };

  React.useEffect(() => {
    if (resStatus) {
      if (resStatus.status === 0) {
        setWarning("Incorrect username or password ");
      } else if (resStatus.status === 200) {
        setWarning("");
        window.location.replace("/");
      }
    }
  }, [resStatus]);

  return (
    <div className={classes.containerStyle}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className={classes.title}
      >
        Sign in to Flavorite
      </Typography>
      <Paper elevation={0} classes={{ root: classes.paperStyle }}>
        {/* TODO | form goes to root on submit */}
        {/* <form noValidate autoComplete="off" action="/home"> */}
        <DialogContent classes={{ root: classes.content }}>
          <MuiThemeProvider theme={theme}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className={classes.warning}
            >
              {warning.length > 0 && (
                <ErrorIcon
                  style={{ position: "relative", top: 5, marginRight: 5 }}
                />
              )}
              {warning}
            </Typography>
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
              style={{ marginBottom: 10 }}
              color="primary"
              margin="dense"
              name="username"
              value={fieldsValue.username}
              label="Email address"
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
              color="primary"
              margin="dense"
              name="password"
              value={fieldsValue.password}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </MuiThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            classes={{ root: classes.buttonStyle, label: classes.labelStyle }}
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </DialogActions>
        {/* </form> */}
      </Paper>
      <Paper
        elevation={0}
        classes={{
          root: classes.registerStyle,
        }}
      >
        <Typography align="center" style={{ color: "#fff" }}>
          New to Flavorite?{" "}
          <a href="/register" className={classes.anchorStyle}>
            Create an account
          </a>
        </Typography>
      </Paper>
    </div>
  );
}

export default Login;
