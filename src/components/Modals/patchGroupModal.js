import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './kpopGroups.css';

let stateToChange;


export default class PatchGroupModal extends Component {



    state = {
        name: this.props.kpopData.name,
        displayName: this.props.kpopData.displayName,
        title: this.props.kpopData.title,
        intro: this.props.kpopData.intro,
        imgGrp: this.props.kpopData.imgGrp,
        gifGrp: this.props.kpopData.gifGrp,
        videoGrp: this.props.kpopData.videoGrp,
        members: this.props.kpopData.members
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
                <input className='createGrpBut' id='name' placeholder={this.props.kpopData.name} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='displayName' placeholder={this.props.kpopData.displayName} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='title' placeholder={this.props.kpopData.title} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='intro' placeholder={this.props.kpopData.intro} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='imgGrp' placeholder={this.props.kpopData.imgGrp} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='gifGrp' placeholder={this.props.kpopData.gifGrp} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <input className='createGrpBut' id='videoGrp' placeholder={this.props.kpopData.videoGrp} onChange={(event) => {this.handleUpdateValue(event.target.id, event.target.value)}}></input>
                <button className='createGrpBut' onClick={(event) => {this.props.patchKpopGroup(this.props.kpopData.id, this.state)}}>Patch Group</button>
            </div>
            <button id='patchGroupModal' className="modal-close is-large patchGrpBut" aria-label="close" onClick={(event) => {this.props.changePatchGroupStateModal()}}></button>
        </div>
        )
    }
}