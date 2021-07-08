import React from "react";
import UserSettings from "./UserSettings";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#313131",
    display: "flex",
    height: 224,
    marginTop: 50,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  labelRoot: {
    paddingLeft: 2,
  },
  labelStyle: {
    textTransform: "none",
    textAlign: "left",
    display: "inline-block !important",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca3e47 !important",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Tabs
          orientation="vertical"
          indicatorColor="primary"
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          classes={{ root: classes.tabs, scroller: classes.scrollerStyle }}
        >
          <Tab
            classes={{ root: classes.labelRoot, wrapper: classes.labelStyle }}
            label="App Setting"
          />
          <Tab
            classes={{ root: classes.labelRoot, wrapper: classes.labelStyle }}
            label="User Settings"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>App Settings</Typography>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "80%" }}>
          <UserSettings />
        </TabPanel>
      </MuiThemeProvider>
    </div>
  );
}

export default VerticalTabs;
