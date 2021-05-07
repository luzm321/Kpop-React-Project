import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './kpopMembers.css';

let stateToChange;

export default class PatchMemberModal extends Component {
    state = {
        groupId: this.props.member.groupId,
        name: this.props.member.name,
        position: this.props.member.position,
        memberImg: this.props.memberImg,
        memberGif: this.props.memberGif,
        memberVideo: this.props.memberVideo
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
                <input className='createGrpBut' id='name' placeholder={this.props.member.name} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='position' placeholder={this.props.member.position} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberImg' placeholder={this.props.member.memberImg[0]} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberGif' placeholder={this.props.member.memberGif[0]} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='memberVideo' placeholder={this.props.member.memberVideo[0]} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <button className='createGrpBut' onClick={() => {this.props.patchKpopMember(this.props.member.id, this.state)}}>Patch Member</button>
            </div>
            <button id='patchMemberModal' className="modal-close is-large patchMemberButton createGrpBut" aria-label="close" onClick={(event) => {this.props.changePatchMemberStateModal()}}>close modal button</button>
        </div>
        );
    };
};

