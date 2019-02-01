// import React from 'react';
// import { Modal, Button } from "react-bootstrap";
// import Exemple from "./Example.jsx"

// class ModalEdit extends React.Component {
//     constructor(props, context) {
//       super(props, context);

//       this.state = {
//         show: false,
//         text:"vgvuybhljb"
//       };
//     }
  
//     handleClose = () =>{
//       this.setState({ show: false });
//     }
  
//     handleShow = () => {
//       this.setState({ show: true });
//     }

//     onChange = () => {
      
//     }
  
//     render() {
//       return (
//         <div>
//           <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
//            Add New Post
//           </Button>
  
//           <Modal show={this.state.show} onHide={this.handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Add New Post</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h4>Insert Text Image Vidéo</h4>
//               <p>
//                  < Exemple onChange={this.onChange}/>
//               </p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={this.onChange}>Add Post</Button>
//               <Button onClick={this.handleClose}>Remove</Button>
              
//             </Modal.Footer>
//           </Modal>
//         </div>
//       );
//     }
//   } 
// export default ModalEdit;