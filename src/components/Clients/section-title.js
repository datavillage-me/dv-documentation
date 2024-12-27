import React, { Component } from "react";
import parse from "html-react-parser";
import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";

class SectionTitle extends Component {
  constructor(props) {
    super(props);
    if (props.className == null || props.className == "")
      this.className = "section-title text-center";
    else this.className = props.className;
  }
  render() {
    return (
      <React.Fragment>
        <Row className={styles.row}>
          <Col lg={{ size: 10, offset: 1 }}>
            <h1 className={this.className}>{parse(this.props.title)}</h1>
            <br />
            <br />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
