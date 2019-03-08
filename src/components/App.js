import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import ItemSlider from './ItemSlider';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
       <div>
         <ButtonAppBar></ButtonAppBar>
          <Container>
            <Row className="show-grid xsHidden" >
              <Col md={2}>
                  <div>Filter</div>
              </Col>
              <Col  md={10}>
                  <ItemSlider></ItemSlider>
              </Col>
            </Row>
          </Container>
        </div>

        );
    }
}

export default App;
