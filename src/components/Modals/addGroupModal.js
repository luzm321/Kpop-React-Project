import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './kpopMembers.css';

let stateToChange;


export default class AddGroupModal extends Component {



    state = {
        name: '',
        displayName: '',
        title: '',
        intro: '',
        imgGrp: [],
        gifGrp: [],
        videoGrp: [],
        members: []
    }


    handleUpdateValue = (groupState, groupValue) => {
        stateToChange = {};
            if (Array.isArray(this.state[groupState])) {
                stateToChange[groupState] = [groupValue];
                console.log(groupValue);
                this.setState(stateToChange);
            } else {
                stateToChange[groupState] = groupValue;
                console.log(groupValue);
                this.setState(stateToChange);
            }
    };

    

    render() {
        return (
        <div id='modal' className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content box">
                <input className='createGrpBut' id='name' placeholder='name' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='displayName' placeholder='displayName' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='title' placeholder='title' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='intro' placeholder='intro' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='imgGrp' placeholder='imgGrp' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='gifGrp' placeholder='gifGrp' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='videoGrp' placeholder='videoGrp' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <button className='createGrpBut' onClick={() => {this.props.createNewGroup(this.state)}}>Create Group</button>
            </div>
            <button id='groupModal' className="modal-close is-large createGrpBut" aria-label="close" onClick={(event) => {this.props.toggleModal(event.target.id)}}></button>
        </div>
        )
    }
}