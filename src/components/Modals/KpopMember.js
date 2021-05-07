import React, {Component} from 'react';
import './kpopMembers.css'
import PatchMemberModal from './patchMemberModal';

export default class KpopMember extends Component {

    state = {
        patchMemberModal: false
    }

    
    changePatchMemberStateModal = () => {
        if (this.state.patchMemberModal === false) {
            this.setState({
                patchMemberModal: true
            })
        } else {
            this.setState({
                patchMemberModal: false
            })
        };
    };


    render() {

        let patchMemberModal;
        if (this.state.patchMemberModal) {
            patchMemberModal = <PatchMemberModal member={this.props.member} changePatchMemberStateModal={this.changePatchMemberStateModal} patchKpopMember={this.props.patchKpopMember} />
        } else {
            patchMemberModal= null;
        };

        return (
            <div id={this.props.member.name}>
                <h1 className='paragraphMember memberHeader'>{this.props.member.name} {this.props.member.position}</h1>
                    <div className="flex-container1">
                        <div>
                            <img className="bbPic" alt='' src={this.props.member.memberImg}/>
                        </div>
                        <div>
                            <img className=" bbPic gif" alt='' src={this.props.member.memberGif}/>
                        </div>
                        <div className='videoLink'>
                            <iframe width="560" height="315" src={this.props.member.memberVideo} title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        {patchMemberModal}
                    </div>
                <span>
                    <button id='patchMemberModal' className='patchMemberButton' onClick={() => {this.changePatchMemberStateModal()}}>Patch Group Member</button>
                    <button id='deleteMemberModal' className='deleteMemberButton' onClick={(event) => {this.props.deleteKpopMember(this.props.member.id)}}>Delete Group Member</button>
                </span>
            </div>
        );
    };
};

// ADDED Delete Group Member Button will need to add the deleteMember function to button?