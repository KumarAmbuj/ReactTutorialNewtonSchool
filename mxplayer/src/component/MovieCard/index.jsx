import "./movieCard.css";
function MovieCard(props) {
  return (
    <div className="moviecard">
      <div>
        <span>{props.data.title} </span>
      </div>
      <div>{props.data.rating}</div>
      <div>{props.data.description}</div>
      <div>{props.data.genre}</div>
    </div>
  );
}
export default MovieCard;
