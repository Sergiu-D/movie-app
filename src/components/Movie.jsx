import React, { useState, useContext } from "react";
import { DataContext } from "../DataProvider";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    textAlign: "center",
  },
  media: {
    minHeight: 600,
  },
});

export default function Movie({ movie }) {
  const classes = useStyles();
  const movieImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const movieName = movie.title || movie.name || movie.original_title;
  const movieNameLength = 30;

  return (
    <a href={`/movie_details/${movie.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movieImage}
            title={movieName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movieName.length > movieNameLength
                ? `${movieName.slice(0, movieNameLength)}...`
                : movieName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Score: {movie.vote_average}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Vote Count: {movie.vote_count}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </a>
  );
}
