import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="footer py-5 bg-dark text-light">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold title">IMDFILM</h3>
            <p className="desc">
              Website ini terinspirasi dari IMDB dibuat menggunakan React JS dan
              menggunakan consume API dari TMDB
            </p>
            <div className="mail">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">hafizh.project45@gmail.com</p>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold">Media Sosial</h5>
            <div className="sosial">
              <a
                href="https://www.instagram.com/hafizh.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/hafizhproject45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-5">
              &copy; Copyright {new Date().getFullYear()} by <b>Hafizh A.</b>,
              Al Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
