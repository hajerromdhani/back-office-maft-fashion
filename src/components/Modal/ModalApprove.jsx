import React from 'react';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

class ModalApprove extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      postApp: this.props.articleApp,
      isEditing: false,
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3003/getonepost/", this.state.postApp._id)
      .then(res => {
        this.setState({
          postApp: res.data
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
    axios.delete("http://localhost:3003/deleteonepost/" + this.state.postApp._id)
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

  onEditOnePost = () => {
    let newPost = {}
    newPost.Content = this.state.postApp.Content
    newPost.Date = this.state.postApp.Date
    newPost.Title = this.state.postApp.Title
    newPost.Author = this.state.postApp.Author
    newPost.Approved = true
    console.log("new post : ", newPost)
    axios.put("http://localhost:3003/modifyonepost/" + this.state.postApp._id, newPost)
      .then(res => {
        console.log(res);
        this.handleClose()
      })
      .catch(err => console.log(err))
      window.location.reload();
  }

  onChangeInputField = (stateName, event) => {
    let p = { ...this.state.postApp };
    p[stateName] = event.target.value;
    this.setState({
      postApp: p,
    })
    console.log("onchange : ", this.state.postApp)
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Show
          </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Contenu of the post number {this.state.postApp._id}</h4>
            <h5>Title : </h5>
            {this.state.isEditing ?
              <input
                className="form-control"
                type="text"
                name="title"
                value={this.state.postApp.Title}
                onChange={event => this.onChangeInputField("Title", event)} /> :
              <p>
                {this.state.postApp.Title}
              </p>
            }
            <h5>Content : </h5>
            {this.state.isEditing ?
              <textarea 
                type="text"
                cols="76" rows="5"
                name="postApp"
                onChange={event => this.onChangeInputField("Content", event)}
                value={this.state.postApp.Content} ></textarea> :
              <p>
                {this.state.postApp.Content}
              </p>
            }
          </Modal.Body>
          <Modal.Footer>
            {this.state.isEditing ? <Button onClick={event => this.onEditOnePost()}>Save</Button> :
              <div>
                <Button onClick={this.onDeleteOnePost}>Remove</Button>
                <Button onClick={event => this.editButton()}>Edit</Button>
              </div>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalApprove;