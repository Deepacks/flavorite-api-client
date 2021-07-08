import React from "react";
import CardDescriptionForm from "./CardDescriptionForm";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  avatarButton: {
    padding: 0,
  },
  avatarButtonColor: {
    color: "#ca3e4750",
  },
  image: {
    width: "85%",
    height: "85%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    minWidth: 275,
    backgroundColor: "#313131",
    color: "#fff",
  },
  contentPadding: {
    paddingBottom: 5,
  },
  title: {
    fontSize: 15,
  },
}));

function AvatarDescription(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        color="primary"
        classes={{
          root: classes.avatarButton,
          colorPrimary: classes.avatarButtonColor,
        }}
        onClick={handleToggle}
      >
        <Avatar
          aria-label="recipe"
          src={props.image}
          classes={{ img: classes.image }}
        />
      </IconButton>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Card className={classes.root} variant="outlined">
          <CardContent classes={{ root: classes.contentPadding }}>
            <Typography className={classes.title} gutterBottom>
              {props.title}
            </Typography>
            {props.description ? (
              <Typography variant="body2" component="p">
                {props.description}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                component="p"
                style={{ maxWidth: "550px" }}
              >
                No description
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href={props.url} target="_blank" rel="noreferrer">
                Open
              </a>
            </Button>
            {!props.description && (
              <CardDescriptionForm
                id={props.id}
                title={props.title}
                setResListener={props.setResListener}
                python={props.python}
              />
            )}
          </CardActions>
        </Card>
      </Backdrop>
    </div>
  );
}

export default AvatarDescription;
