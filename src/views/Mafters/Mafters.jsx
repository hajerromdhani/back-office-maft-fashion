import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col, Table, Tooltip, OverlayTrigger, Button} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArrayMafters } from "variables/Variables.jsx";

class Mafters extends Component {
  constructor(props){
    super(props)
    this.state ={
      mafters : [],
    };
  };

  componentDidMount =() =>{
    axios.get("http://localhost:3003/get-mafter")
        .then(res => {
          console.log("res data:", res.data)
            this.setState({
              mafters: res.data
            }); 
      })
  }

  onDeleteOneMafter = (idMafter) => {
    console.log("id Mafter : ", idMafter)
    axios.delete("http://localhost:3003/delete-mafter/"+ idMafter)
      .then(res => {
        //console.log(this.state.onemafter)
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  render() {
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Table of Mafters "
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArrayMafters.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.mafters.map((mafter, key) => {
                        return (
                          <tr key={key}>
                            <td>{key+1}</td>
                            <td>{mafter.FirstName}</td>
                            <td>{mafter.LastName}</td>
                            <td>{mafter.Tel}</td>
                            <td>{mafter.Mail}</td>
                            <td>{mafter.Profession}</td>
                            <td><OverlayTrigger placement="top" overlay={remove}>
                                  <Button bsStyle="danger" simple type="button" bsSize="xs" 
                                  onClick={event => this.onDeleteOneMafter(mafter._id)}>
                                    <i className="fa fa-times" />
                                  </Button>
                                </OverlayTrigger>
                            </td>
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
      </div>
    );
  }
}

export default Mafters;
