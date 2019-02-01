import React from 'react';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

class ModalDisapprove extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      onepost: this.props.article,
      isEditing: false
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3003/getonepost/", this.props.article._id)
      .then(res => {
        this.setState({
          onepost: res.data
        });
      })
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  onDeleteOnePost = () => {
    axios.delete("http://localhost:3003/deleteonepost/" + this.state.onepost._id)
      .then(res => {
        console.log(this.state.onepost._id)
        console.log(res);
      })
      .catch(err => console.log(err))
    this.handleClose()
    window.location.reload();
  }

  editButton = () => {
    this.setState({
      isEditing: true
    })
  }

  onEditOnePost = (disapprove) => {
    let newPost = {}
    newPost.Content = this.state.onepost.Content
    newPost.Date = this.state.onepost.Date
    newPost.Title = this.state.onepost.Title
    newPost.Author = this.state.onepost.Author
    newPost.Approved = disapprove
    console.log("new post : ", newPost)
    axios.put("http://localhost:3003/modifyonepost/" + this.state.onepost._id, newPost)
      .then(res => {
        console.log(res);
        this.handleClose()
      })
      .catch(err => console.log(err))
      window.location.reload();
  }

  onChangeInputField = (stateName, event) => {
    let p = { ...this.state.onepost };
    p[stateName] = event.target.value;
    this.setState({
      onepost: p,
    })
    console.log("onchange : ", this.state.onepost)
  }

  render(props) {
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Show
          </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Post Disapprove</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Contenu of the post number {this.state.onepost._id}</h4>
            <h5>Title : </h5>
            {this.state.isEditing ?
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.onepost.Title}
              onChange={event => this.onChangeInputField("Title", event)} /> : 
              <p>
                {this.state.onepost.Title}
              </p>
            }
            <h5>Content : </h5>
            {this.state.isEditing ?
              <textarea type="text"
              cols="76" rows="5"
                name="onepost"
                onChange={event => this.onChangeInputField("Content", event)}
                value={this.state.onepost.Content} ></textarea> :
              <p>
                {this.state.onepost.Content}
              </p>
            }
          </Modal.Body>
          <Modal.Footer>
            {this.state.isEditing ? <Button onClick={event => this.onEditOnePost(false)}>Save</Button> :
              <div>
                <Button onClick={event => this.editButton()}>Edit</Button>
                <Button onClick={this.onDeleteOnePost}>Disapprove</Button>
                <Button onClick={event => this.onEditOnePost(true)}>Approve</Button>
              </div>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalDisapprove;