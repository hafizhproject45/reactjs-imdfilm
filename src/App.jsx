import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useDebounce } from "use-debounce";
import { getMovieList, searchMovies } from "./api";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col lg={4} md={6} sm={12} xs={12} className="mb-4" key={i}>
          <Card>
            <Card.Title className="text-center mt-2 fw-bold text truncate-text p-2 title">
              {movie.title}
            </Card.Title>
            <Card.Text className="text-center release">
              release: {movie.release_date}
            </Card.Text>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
              className="poster"
            />
            <Card.Body className="text-center text">
              <Card.Text className="text-danger rating">
                {movie.vote_average}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Perform the search when the debounced search term changes
    if (debouncedSearchTerm) {
      search(debouncedSearchTerm);
    } else {
      // If search term is empty or too short, revert to displaying popular movies
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  }, [debouncedSearchTerm]);

  const search = async (q) => {
    const query = await searchMovies(q);
    setPopularMovies(query.results);
  };

  return (
    <div className="homepage min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-white fw-bold">IMDFILM</h1>
            <p className="text-center text-white fw-bold">
              Film terkini, dengan informasi yang uptodate
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search movies"
              className="search"
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Row>
          <PopularMovieList />
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default App;
