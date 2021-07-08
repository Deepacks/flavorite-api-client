import React from "react";
import Cards from "./Cards";
import SkeletonElement from "../skeletons/SkeletonElement";
//material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerBNavbarAdapter: {
    paddingBottom: 64,
  },
}));

function CardContainer(props) {
  const classes = useStyles();
  const [bookmarks, setBookmarks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [resser, setResser] = React.useState();

  React.useEffect(() => {
    if (props.python === true) {
      fetch("https://favbc.herokuapp.com/bookmarks", {
        method: "GET",
      }).then((res) => setResser(res));
    } else if (props.python === false) {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      };
      fetch(process.env.REACT_APP_API_URL + "/bookmarks", requestOptions)
        .then((response) => response.json())
        .then((data) => setResser(data));
    }
  }, [props.resListener, props.python]);

  React.useEffect(() => {
    if (resser) {
      if (resser.status === 0) {
        window.location.replace("/login");
      } else {
        setBookmarks(resser);
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
    }
  }, [resser]);

  return (
    <div
      className={["mobile-container", classes.containerBNavbarAdapter].join(
        " "
      )}
    >
      {!isLoading &&
        bookmarks.map((el) => {
          return (
            <Cards
              key={el.id}
              id={el.id}
              image={el.image}
              title={el.title}
              timeStamp={el.timeStamp}
              preview={el.preview}
              url={el.url}
              description={el.description}
              like={el.like}
              setResListener={props.setResListener}
              python={props.python}
            />
          );
        })}
      {isLoading && <SkeletonElement />}
    </div>
  );
}

export default CardContainer;
