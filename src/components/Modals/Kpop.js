import React, {Component} from 'react';
import './kpopGroups.css';
import KpopMember from './KpopMember';
import PatchGroupModal from './patchGroupModal';



export default class Kpop extends Component {

    state = {
        patchGroupModal: false
    }

    changePatchGroupStateModal = () => {
        if (this.state.patchGroupModal === false) {
            this.setState({
                patchGroupModal: true
            })
        } else {
            this.setState({
                patchGroupModal: false
            })
        };
    };

    render() {

        let patchGroupModal;
        if (this.state.patchGroupModal) {
            patchGroupModal = <PatchGroupModal changePatchGroupStateModal={this.changePatchGroupStateModal} patchKpopGroup={this.props.patchKpopGroup} kpopData={this.props.kpopData} />
        } else {
            patchGroupModal= null;
        };

        return(
            <div id={this.props.kpopData.name} className='bbColor bigBang'>
                <h1 className="bigBangGroup">{this.props.kpopData.title}</h1>
                <p className="paragraphBb exo mx">{this.props.kpopData.intro}</p>
                <div className="flex-container1">
                    <div>
                        <img className="bbPic" alt='' src={this.props.kpopData.imgGrp}/>
                    </div>
                    <div>
                        <img className=" bbPic" alt='' src={this.props.kpopData.gifGrp}/>
                    </div>
                    <div className='videoLink'>
                        <iframe width="560" height="315" src={this.props.kpopData.videoGrp[0]} title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                {this.props.kpopMembers.map(member => {
                    if (member.groupId === this.props.kpopData.id) {
                        return <KpopMember member={member} deleteKpopMember={this.props.deleteKpopMember} toggleModal={this.props.toggleModal} patchKpopMember={this.props.patchKpopMember} />
                    } else {
                        return null;
                    }
                })}
                {patchGroupModal}
                <span>
                    <button id='memberModal' className='addMemberButton' onClick={(event) => {this.props.toggleModal(event.target.id, this.props.kpopData.id)}}>Add Group Member</button>
                    <button id='patchGroupModal' className='patchGrpBut' onClick={(event) => {this.changePatchGroupStateModal()}}>Patch Kpop Group</button>
                    <button id='deleteGroupModal' className='deleteGrpBut' onClick={(event) => {this.props.deleteKpopGroup(this.props.kpopData.id)}}>Delete Kpop Group</button>
                </span>
            </div>
        );
    };
};
       
