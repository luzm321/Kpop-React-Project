import React, {Component} from 'react';
import './loginPage.css';
import LoginManager from './../Managers/LoginManager';
import RegisterModal from './../Modals/registerModal';

export default class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        registerModal: false
    };

    handlesStateChange = (target) => {
        let stateToChange = {};
        stateToChange[target.id] = target.value
        this.setState(stateToChange)
    };

    changeRegisterStateModal = () => {
        if (this.state.registerModal === false) {
            this.setState({
                registerModal: true
            });
        } else {
            this.setState({
                registerModal: false
            })
        };
    };


    render() {

        let registerModal;

        if (this.state.registerModal) { 
            registerModal = <RegisterModal show={this.state.registerModal} changeRegisterStateModal={this.changeRegisterStateModal} createNewUser={this.props.createNewUser} />
        } else {
            registerModal = null;
        };

        return (
        <div id='loginPage' className='loginHeader parallax'>
            {/* <title>Kpop Blog | Login</title> */}
            <div className='login'>
                <h1 className='login'>~Login Page~</h1>
            </div>
                <br/>
                <br/>
                <br/>
                <input id='username' className='user' type='text' placeholder='username' required onChange={(event) => {this.handlesStateChange(event.target)}}></input>
                <input id='password' className='password' type='password' placeholder='password' required onChange={(event) => {this.handlesStateChange(event.target)}}></input>
                <br/>
                <br/>
                <button type='button' className='loginButton' onClick={(event) => {this.props.handleLoginState(this.state)}}>Log In</button>
                <br/>
                <br/>
                <button type='button' className='registerButton loginButton' onClick={() => {this.changeRegisterStateModal()}}>Register</button>
                <br/>
                <br/>
                <img className='welcomeGif' alt='' src='https://i.pinimg.com/originals/6d/cd/94/6dcd94c7c4bf4800648ef7cbe0113c33.gif'></img>
                <img className='welcomeGif' alt='' src='https://media.tenor.com/images/4d40c1581a29e3018fba89450bb91e8e/tenor.gif'></img>
            {registerModal}
        </div>
        );
    };
};
