import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css"
import Error from "../Error/Error";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movie, setMovieReviews] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function fetchCast() {
            try {
                 setError(false);
                const movieReviews = await fetchMovieReviews(movieId);
                setMovieReviews(movieReviews);
            } catch (error) {
              setError(true)
            } 
        }
        fetchCast();
    }, [movieId])
    if (movie !== null){return (
      <> {movie.length===0? <div>There are no reviews</div>:<ul className={css.review_list}>{movie.map(review => {
              return (
               <li key={review.id} className={css.cast_item}>
                  <p className={css.author}>Author: {review.author}</p>
                  <p>{review.content }</p>
              </li>   
              )
          })}
              
        </ul> }
        {error && <Error />}
    </>
  )}
}

export default MovieReviews