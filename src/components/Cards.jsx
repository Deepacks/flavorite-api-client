import React from "react";
import AvatarDescription from "./AvatarDescription";
import CardOptions from "./CardOptions";
import ClipboardButton from "./ClipboardButton";
import LikeButton from "./LikeButton";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(() => ({
  root: {
    width: "510px",
    height: "330px",
    backgroundColor: "#525252",
  },
  rootNoPrev: {
    width: "510px",
    height: "160px",
    backgroundColor: "#525252",
  },
  iconsContainer: {
    display: "inline-block",
    position: "relative",
    margin: "0 35px 35px 0",
  },
  cardHeader: {
    color: "#e1e5ea",
  },
  titlePositionFix: {
    marginLeft: 56,
    width: 360,
    marginTop: 6,
  },
  redCirle: {
    border: "2px solid #ca3e47",
    position: "absolute",
    top: 16,
    width: 40,
    height: 40,
    borderRadius: "100%",
    padding: 2,
  },
  avatarStyles: {
    margin: 0,
  },
  optionsPosition: {
    position: "relative",
    top: 6,
  },
  media: {
    objectFit: "cover",
    objectPosition: "50% 0",
    width: 510,
    height: 187,
    filter: "blur(1.4px)",
    transition: "0.165s",
    "&:hover": {
      filter: "none",
    },
  },
  icons: {
    position: "absolute",
    bottom: 0,
    padding: 6,
  },
}));

function Cards(props) {
  const classes = useStyles();

  var cardTitle;
  //checking title lenght and fixing if needed
  if (props.title.split(" ").length - 1 === 0) {
    cardTitle = props.title.slice(0, 31) + "\n" + props.title.slice(31);
  } else cardTitle = props.title;

  return (
    <section className={classes.iconsContainer}>
      <Card className={props.preview ? classes.root : classes.rootNoPrev}>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            title: classes.titlePositionFix,
          }}
          avatar={
            <div className={classes.redCirle}>
              <AvatarDescription
                id={props.id}
                title={cardTitle}
                image={props.image}
                url={props.url}
                description={props.description}
                setResListener={props.setResListener}
                className={classes.avatarStyles}
                python={props.python}
              />
            </div>
          }
          action={
            <CardOptions
              class={classes.optionsPosition}
              id={props.id}
              title={cardTitle}
              description={props.description}
              setResListener={props.setResListener}
              python={props.python}
            />
          }
          title={
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="link-color"
            >
              {cardTitle}
            </a>
          }
          subheader={props.timeStamp}
        />
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="link-color"
        >
          {props.preview && (
            <CardMedia
              className={classes.media}
              component="img"
              src={`data:image/png;base64, ${props.preview}`}
            />
          )}
        </a>

        <CardActions className={classes.icons} disableSpacing>
          <LikeButton
            like={props.like}
            id={props.id}
            setResListener={props.setResListener}
            python={props.python}
          />
          <ClipboardButton url={props.url} />
        </CardActions>
      </Card>
    </section>
  );
}

export default Cards;
