/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  ListGroupItem,
  ListGroup,
  CardFooter,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">PROFILE</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  <strong>안녕하세요 성장하는 개발자 강찬혁입니다.</strong>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/me.jpg").default}
                    />
                    <h4 className="title">Kang ChanHyeok</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav className="nav-tabs-primary justify-content-center" tabs>
                      <NavItem>
                        <p>1996.12.05</p>
                        <p>Tel. 010-3053-5801</p>
                        <p>Email. 030mplm@gmail.com</p>
                        <p><strong>서울특별시 강서구 염창동</strong></p>
                      </NavItem>
                    </Nav>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="12">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Skills Stack</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                  </CardBody>
                </Card>
                <Row>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/java.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row> 
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Java</h4>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        <a href="https://docs.oracle.com/en/java/">
                          Document
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/Spring.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Spring</h4>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/">
                          Document
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/python.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Python</h4>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        <a href="https://docs.python.org/3/">
                          Document
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/django.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">DJANGO</h4>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        <a href="https://docs.djangoproject.com/en/3.1/">
                          Document
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/Ruby.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">RUBY</h4>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="warning">
                        <a href="https://ruby-doc.org/">
                          Document
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/Rails.png").default}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Rails</h4>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="warning">
                          <a href="https://guides.rubyonrails.org/index.html">
                            Document
                          </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
