import React, {Component} from 'react';
import './navBar.css';

export default class LinkList extends Component {




    render() {
        return(
            <span>
                <img className='navGif gifNav1'src={this.props.kpopGroup.gifGrp} alt=''></img>
                <a id={this.props.kpopGroup.name} className='sideBarLink' onClick={(event) => {this.props.changeState(event.target.id)}}>{this.props.kpopGroup.displayName} </a>
            </span>
        )
    }
}