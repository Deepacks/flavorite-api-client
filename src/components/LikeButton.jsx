import React from "react";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(() => ({
  likeButton: {
    backgroundColor: "#525252",
    borderRadius: "100%",
    height: "60px !important",
    width: "60px !important",
    padding: 6,
    color: "rgba(0, 0, 0, 0.54)",
    "&:hover": {
      color: "#ca3e47ab",
    },
  },
  dislikeButton: {
    backgroundColor: "#525252",
    borderRadius: "100%",
    height: "60px !important",
    width: "60px !important",
    padding: 6,
    color: "#ca3e47",
    "&:hover": {
      backgroundColor: "#ca3e4715",
    },
  },
}));

function LikeButton(props) {
  const classes = useStyles();
  const [isLiked, setIsLiked] = React.useState(!props.like);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (props.python) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: isLiked }),
      };
      fetch(
        "https://favbc.herokuapp.com/bookmarks/" + props.id,
        requestOptions
      ).then((res) => props.setResListener(res));
    } else if (props.python === false) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: isLiked }),
      };
      fetch(
        process.env.REACT_APP_API_URL + "/bookmarks/" + props.id,
        requestOptions
      ).then((res) => props.setResListener(res));
    }
  };

  return (
    <Button
      aria-label="share"
      className={isLiked ? classes.likeButton : classes.dislikeButton}
      onClick={handleLike}
    >
      <FavoriteIcon />
    </Button>
  );
}

export default LikeButton;
