import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArrayPosts } from "variables/Variables.jsx";
import ModalApprove from "components/Modal/ModalApprove.jsx";

class PostsOfAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesApproved: [],
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3003/get-post")
      .then(res => {
        this.setState({
          articlesApproved: res.data.filter(el => el.Approved === true),
        });
      })
  }

  onAddPost = () => {
    axios.post("/add-post", { ...this.state })
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Table of posts Admin"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArrayPosts.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.articlesApproved.map((post, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>Maft Fashion</td>
                            <td>{post.Title}</td>
                            <td>{post.Date}</td>
                            <td>{post.Author}</td>
                            <ModalApprove articleApp={post} />
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>

        <div> <Link to="/addpost">
          <Button bsStyle="primary" bsSize="small">
            Add New Post
        </Button>
        </Link></div>
      </div>
    );
  }
}

export default PostsOfAdmin;
