import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class ReactStrapBadge08 extends Component {
  render() {
    return (
      <div>
        <h1>
          Product Name <Badge color='secondary'>Hit</Badge>
        </h1>
        <Button color='#555' outline>
          Accessor <Badge color='dark'>4</Badge>
        </Button>
        <Badge color='danger' pill>
          pill
        </Badge>
        <Badge href='https://dabipyeung.com' color='light'>
          GoLink
        </Badge>
      </div>
    );
  }
}

export default ReactStrapBadge08;
