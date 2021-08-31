import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class StrapBreadcrumbs09 extends Component {
  render() {
    return (
      <div id='top'>
        <Breadcrumb tag='nav' listTag='div'>
          <BreadcrumbItem tag='a' href='#top'>
            Go_Top
          </BreadcrumbItem>
          <BreadcrumbItem tag='a' href='#bottom'>
            Go_bottom
          </BreadcrumbItem>
        </Breadcrumb>
        <div id='buttom' style={{ marginTop: "1000px" }}>
          <span>Bottom</span>
        </div>
      </div>
    );
  }
}

export default StrapBreadcrumbs09;
