import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './../LoginPage/loginPage.css';

let stateToChange;


export default class RegisterModal extends Component {



    state = {
        username: '',
        password: '',
        email: '',
        age: '',
        birthdate: '',
    }


    handleUpdateValue = (userState, userValue) => {
        stateToChange = {};
        stateToChange[userState] = userValue;
        this.setState(stateToChange);
    };
    
    render() {
        return (
        <div id='modal' className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content box">
                <h2 id='register' className='reg'>Registration</h2>
                <br/>
                <div className='regForm'>
                    <div>   
                        <label id='Username' className='form'>Username</label>
                        <input id='username' type='text' placeholder='username' required onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                    </div>
                    <br/>
                    <div>
                        <label id='Password' className='form'>Password</label>
                        <input id='password' type='password' placeholder='password' required onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                    </div>
                    <br/>
                    <div>
                        <label id='Email' className='form'>Email</label>
                        <input id='email' type='email' name='email' placeholder='email' required onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                    </div>
                    <br/>
                    <div>
                        <label id='Age' className='form'>Age</label>
                        <input id='age' type='number' name='age' placeholder='age' min='1' max='100' step='1' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                    </div>
                    <br/>
                    <div>
                        <label id='Birthdate' className='form'>Birthdate</label>
                        <input id='birthdate' type='date' name='date' placeholder='date' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                    </div>
                    <br/>
                    <br/>
                    <button className='regBut' type='reset'>Reset</button>
                    <button className='regBut' role='button' onClick={() => {this.props.createNewUser(this.state)}}>Submit</button>
                </div>
                <button id='groupModal' className="modal-close is-large createGrpBut" aria-label="close" onClick={(event) => {this.props.changeRegisterStateModal()}}></button>
            </div>
        </div>
        );
    };
};