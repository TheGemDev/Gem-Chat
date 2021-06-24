import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  searchInput: {
    opacity: "0",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      //#f3f2ef
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item>
            <Typography
              variant='h6'
              component='h2'
              gutterBottom
              className={classes.title}>
              Gem Chat App
            </Typography>
          </Grid>
          <Grid item>
            <IconButton className={classes.title}>
              <MoreVertIcon fontSize='small' display='flex' flexGrow={1} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
