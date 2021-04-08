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
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {
  const [inputFocus, setInputFocus] = React.useState(false);
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  React.useEffect(() => {
    Slider.create(slider1.current, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
    Slider.create(slider2.current, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
  },[]);
  return (
    <div className="section section-basic" id="basic-elements">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <h3>Links</h3>
        <Row>
          <Col md="8">
            <Button color="link">Default</Button>
            <Button className="btn-link" color="primary">
              Primary
            </Button>
            <Button className="btn-link" color="info">
              Info
            </Button>
            <Button className="btn-link" color="success">
              Success
            </Button>
            <Button className="btn-link" color="warning">
              Warning
            </Button>
            <Button className="btn-link" color="danger">
              Danger
            </Button>
          </Col>
        </Row>
        
        <Row id="checkRadios">
          <Col lg="3" sm="6">
            <p className="category">Toggle Buttons</p>
            <CustomInput type="switch" id="switch-1" />
            <br />
            <CustomInput type="switch" id="switch-2" label="With label" />
          </Col>
          <Col lg="3" sm="6">
            <p className="category">Sliders</p>
            <div className="slider" ref={slider1} />
            <br />
            <div className="slider slider-info mb-3" ref={slider2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
