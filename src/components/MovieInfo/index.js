import PropTypes from "prop-types";
import React, { useContext } from "react";
// API
import API from "../../API";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Images
import NoImage from "../../images/no_image.jpg";
// Components
import Thumb from "../Thumb";
import Rate from "../Rate";
// Styles
import { Content, Text, Wrapper } from "./MovieInfo.styles";
// Context
import { Context } from "../../context";

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  console.log(movie);

  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        ></Thumb>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATTING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>

            <div className="director">
              <h3>DIRECTOR {movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>

          {user && <Rate callback={handleRating} />}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
