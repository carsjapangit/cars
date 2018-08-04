import React, { Component } from "react";
import Icon from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';



export default class IconText extends Component {

  constructor(props) {
  super(props);
  this.iconName= this.props.iconName;
  this.text= this.props.text;
  }

  render() {
    return (
      <Container>
      <Row className="show-grid xsHidden" >
        <Col md={2}>

        <Icon   className='super-crazy-colors'
        name={this.iconName}
        size='xs'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </Col>
        <Col  md={10}>
            <span>{this.text}</span>
        </Col>
      </Row>
    </Container>
    );
  }
}
