import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col, Table} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArrayPosts } from "variables/Variables.jsx";
import ModalDisapprove from "components/Modal/ModalDisapprove.jsx"; 




class PostsOfMafters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleDisapproved: []
    };
  }

  componentDidMount =() =>{
    axios.get("http://localhost:3003/get-post")
        .then(res => {
            this.setState({
              articleDisapproved: res.data.filter(el => el.Approved === false)
            });
      })
  }

  onAddPost =  () => {
    axios.post("/add-post", {...this.state})
  }
  
  render() {
    return (
      <div className="content">
     
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Table of posts Disapproved"
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
                      {this.state.articleDisapproved.map((post, key) => {
                        return (
                            <tr key={key}>
                            <td>{key+1}</td>
                            <td>Maft Fashion</td>
                            <td>{post.Title}</td>
                            <td>{post.Date}</td>
                            <td>{post.Author}</td>
                            <ModalDisapprove article={post} />
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
           
              <Card
                plain
                title="Table of posts Approved"
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
                           <td>{key+1}</td>
                            <td>{post.Type}</td>
                            <td>{post.Title}</td>
                            <td>{post.Date}</td>
                            <td>{post.Author}</td>
                            <ModalApprove articleApp={post}/>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PostsOfMafters;
