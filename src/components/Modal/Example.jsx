import React from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { createHashHistory } from 'history'

export const history = createHashHistory()

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: {
                Title: "",
                Date: "",
                Content: "",
                Author: "",
                Approved: true
            }
        }
    }

    onSubmitOnePost = event => {
        event.preventDefault();
        axios.post("http://localhost:3003/add-post", this.state.newPost)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            history.push('/PostsOfAdmin');
    }

    /*changeInput = (stateName, event) => {
        let post = { ...this.state.newPost };
        post[stateName] = event.target.value;
        this.setState({ newPost: post })
    }*/

    updateContent = (value) => {
        this.setState({
            newPost: {
                Content: value,
                Title: "Fashion",
                Date: "2018",
                Author: "Mariem",
                Approved: true
            }
        })
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
    // jodit;
    // setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    render() {
        return (<div>
            <JoditEditor
                editorRef={this.setRef}
                value={this.state.newPost.Content}
                config={this.config}
                onChange={this.updateContent}
            />
            <Button onClick={event =>
                this.onSubmitOnePost(event)
            }>Add Post</Button>
        </div>
        );
    }
}

export default Example