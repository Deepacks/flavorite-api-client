import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  container: {
    width: "510px",
    display: "inline-block",
    margin: "0 35px 35px 0",
  },
  skeletonBody: {
    height: "275px",
    borderRadius: "0 0 15px 15px"
  },
}));

function SkeletonStructure(key) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box display="flex" alignItems="center" key={key}>
        <Box margin={1}>
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
        </Box>
        <Box width="100%">
          <Skeleton variant="text" width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton
        variant="rect"
        width="100%"
        classes={{ root: classes.skeletonBody }}
      >
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </div>
  );
}

function SkeletonElement() {
  return (
    <div style={{ display: "inline-block" }}>
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
    </div>
  );
}

export default SkeletonElement;
