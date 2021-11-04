import { MovieCard } from "./MovieCard";
import { SideBar } from "./SideBar";
import { GenreResponseProps, MovieProps } from "../App";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

export function Content({
  selectedGenre,
  movies,
  handleClickButton,
  selectedGenreId,
}: ContentProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie: any) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  ); // Complete aqui
}
