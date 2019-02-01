import React from 'react';
//import TextFieldGroup from '../../components/common/TextFieldGroup';
//import validateInput from '../../../server/shared/validations/login';
//import { connect } from 'react-redux';
//import login from './actions/login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
            
        }
    }
    /*onSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.data.errors, isLoading: false })
            );
        }
    }
    isValid = () => {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors })
        }
        return true;
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }*/
    render() {
        //const { errors, identifier, password, isLoading } = this.state;
        return (
            <form>
                <h1>Login</h1>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" >Login</button>
                </div>
            </form>
        )
    }
}
export default LoginForm;
