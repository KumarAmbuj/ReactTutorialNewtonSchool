import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../component/MovieCard";

function Movies() {
  const { movieType } = useParams();
  console.log(movieType);
  const [movies, setMovies] = useState([
    // Drama
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over the years, finding redemption through acts of decency.",
      rating: 9.3,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      rating: 9.2,
      genre: "Drama",
    },
    // ... Add more drama movies

    // Horror
    {
      title: "The Shining",
      description:
        "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence.",
      rating: 8.4,
      genre: "Horror",
    },
    {
      title: "Get Out",
      description:
        "A young African-American uncovers disturbing secrets when he meets his white girlfriend's family.",
      rating: 7.7,
      genre: "Horror",
    },
    // ... Add more horror movies

    // Comedy
    {
      title: "Superbad",
      description:
        "Two co-dependent high school seniors plan a post-graduation party and try to buy alcohol to impress their peers.",
      rating: 7.6,
      genre: "Comedy",
    },
    {
      title: "The Hangover",
      description:
        "A bachelor party in Las Vegas turns into a race to find the groom before the wedding.",
      rating: 7.7,
      genre: "Comedy",
    },
    // ... Add more comedy movies

    // Sci-Fi
    {
      title: "Blade Runner",
      description:
        "A blade runner must pursue and terminate four replicants who stole a ship in space.",
      rating: 8.1,
      genre: "Sci-Fi",
    },
    {
      title: "Inception",
      description:
        "A thief enters the dreams of others to steal their secrets and discovers a conspiracy.",
      rating: 8.8,
      genre: "Sci-Fi",
    },
    // ... Add more sci-fi movies

    // Sports
    {
      title: "Rocky",
      description:
        "A small-time boxer gets a supremely rare chance to fight the heavy-weight champion.",
      rating: 8.1,
      genre: "Sports",
    },
    {
      title: "Remember the Titans",
      description:
        "The true story of a newly appointed African-American coach and his high school team during their first season as a racially integrated unit.",
      rating: 7.8,
      genre: "Sports",
    },
  ]);
  const [showMovies, setShowMovies] = useState(movies);
  useEffect(() => {
    let x = movies.filter((val) => {
      return val.genre === movieType;
    });
    setShowMovies(x);
  }, [movieType]);
  return (
    <>
      {/* <div>Movies</div> */}
      {showMovies.length > 0 &&
        showMovies.map((val, index) => {
          return <MovieCard key={index} data={val} />;
        })}
    </>
  );
}
export default Movies;
