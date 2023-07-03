import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <div class="image-wrap">
                  <a href="https://rahmanzeb.com">
                    <img src={data.img} alt="" />
                  </a>
                </div>

                <div className="content">
                  <h1 className="text-muted">{data.title}</h1>
                  <p className="text-muted"> <span className="projectTitle">Tecnology: </span> {data.description}</p>
                  <div gap={2}>
                    <a className="p-2 m-2" href={data.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="p-2 m-2" href={data.DemoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
