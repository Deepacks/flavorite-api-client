import React from "react";
import DeleteAccount from "./DeleteAccount";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
//material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: "#fff",
    backgroundColor: "#313131",
  },
  textStyle: {
    display: "inline-block",
  },
  red: {
    marginLeft: 14,
    color: "#ca3e47",
  },
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
  tableStyle: {
    display: "inline-block",
    position: "relative",
    top: 10,
  },
  showStyle: {
    textTransform: "none",
    padding: 0,
    marginLeft: 10,
    color: "#e1e5ea",
    position: "relative",
    bottom: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca3e47 !important",
    },
  },
});

function UserSettings() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [resListener, setResListener] = React.useState("");
  //const [userData, setUserData] = React.useState();

  //React.useEffect(() => {
  //  fetch("//url", { method: "GET" })
  //    .then((res) => res.json())
  //    .then((data) => setUserData(data));
  //}, [resListener]);

  //fake data
  const user = {
    email: "vladimirsette.vc@gmail.com",
    password: "123456789123",
    //PASSWORD CAN'T BE LONGER THEN 12 CH
  };

  //create hidden password
  const hidePassword = () => {
    var hiddenPassword = "";
    for (let i = 0; i < user.password.length; i++) {
      hiddenPassword = hiddenPassword + "*";
    }
    return hiddenPassword;
  };

  const [password, setPassword] = React.useState(hidePassword());

  const showPassword = () => {
    if (password === user.password) {
      setPassword(hidePassword());
    } else if (password === hidePassword()) {
      setPassword(user.password);
    }
  };

  return (
    <div style={{ paddingLeft: "10%" }}>
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography style={{ display: "inline-block", marginLeft: 50 }}>
                Current email:
              </Typography>
              <Typography
                style={{ display: "inline-block" }}
                className={classes.red}
              >
                {user.email}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={0} className={classes.paper}>
              <ChangeEmail setResListener={setResListener} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={0}
              className={classes.paper}
              style={{ paddingTop: 4 }}
            >
              <Typography style={{ display: "inline-block", marginLeft: 50 }}>
                Current password:{" "}
              </Typography>
              <table className={classes.tableStyle}>
                <tbody>
                  <tr>
                    <td style={{ width: 125 }}>
                      <Typography
                        style={{ display: "inline-block" }}
                        className={classes.red}
                      >
                        {password}
                      </Typography>
                    </td>
                    <td>
                      <Button
                        classes={{ root: classes.showStyle }}
                        onClick={showPassword}
                      >
                        Show
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={0} className={classes.paper}>
              <ChangePassword setResListener={setResListener} />
            </Paper>
          </Grid>
        </Grid>
        <DeleteAccount />
      </MuiThemeProvider>
    </div>
  );
}

export default UserSettings;
