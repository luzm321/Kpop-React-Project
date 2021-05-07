import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './kpopMembers.css';

let stateToChange;

export default class AddMemberModal extends Component {

    state = {
            groupId: this.props.kpopGroupId,
            name: '',
            position: '',
            memberImg: [],
            memberGif: [],
            memberVideo: []
    }


    handleUpdateValue = (memberState, memberValue) => {
        stateToChange = {};
        // This condition is to make sure that it adds array values where there should be array values such as memberImg, memberGif and memberVideo
            if (Array.isArray(this.state[memberState])) {
                stateToChange[memberState] = [memberValue];
                console.log(memberValue);
                this.setState(stateToChange);
            } else {
                // for all others it can just add the value as a string
                stateToChange[memberState] = memberValue;
                console.log(memberValue);
                this.setState(stateToChange);
            }
    };


    render() {
        return (
        <div id='modal' className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content box">
                <input className='createGrpBut' id='name' placeholder='name' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='position' placeholder='position' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberImg' placeholder='memberImg' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberGif' placeholder='memberGif' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberVideo' placeholder='memberVideo' onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <button className='createGrpBut' onClick={() => {this.props.createNewMember(this.state)}}>Create Member</button>
            </div>
            <button id='memberModal' className="modal-close is-large createGrpBut" aria-label="close" onClick={(event) => {this.props.toggleModal(event.target.id)}}>close modal button</button>
        </div>
        )
    }


}