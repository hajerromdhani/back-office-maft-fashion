import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import axios from "axios";

class HeaderLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articlesNotif: [],
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3003/get-post")
      .then(res => {
        this.setState({
          articlesNotif: res.data.filter(el => el.notif === false),
        });
        console.log("size : ", this.state.articlesNotif.length)
      })
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">{this.state.articlesNotif.length}</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            {this.state.articlesNotif.map((post, key) => {
              return (
                <MenuItem eventKey={key}>{post.Title} {post.Author}</MenuItem>
              );
            })}

          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
