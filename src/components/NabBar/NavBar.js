import React, {Component} from 'react';
import {StyleRoot} from 'radium';
import Animations from '../../helperMethods/animationsManager';
import LinkList from './LinkList'
import './navBar.css';
let animations = new Animations();

export default class NavBar extends Component {

    state = {
        sideBar: false,
    };

    componentDidMount() {};

    expandSideBar = () => {
        this.setState({
            sideBar: true,
        });
    };

    collapseSideBar = () => {
        this.setState({
            sideBar: false,
        });
    }

    render() {

        // const kpopGroups = KpopData.map(kpop => <Kpop key={kpop.id} kpop={kpop} />);

        // make a LinkList component that will create a sidebar item based on the data from the database

        let linksList;
        if (this.state.sideBar) {
            linksList = (
                <div id='navList' className='navListExpanded'>
                    <span>
                        <img className='navGif gifNav1'src='https://media.tenor.com/images/2d04073591b16bef8c3d0b508574492b/tenor.gif' alt=''></img>
                        <a id='homePage' className='sideBarLink' onClick={(event) => {this.props.changeState(event.target.id)}}>Home </a>
                    </span>
                    {this.props.kpopData.map(kpopGroup => 
                        <LinkList kpopGroup={kpopGroup} changeState={this.props.changeState}/>
                    )}
                    <button id='groupModal' className='addGrpBut' onClick={(event) => {this.props.toggleModal(event.target.id)}}>Add Kpop Group</button>
                    <span>
                        <img className='navGif' src='https://i.pinimg.com/originals/59/80/88/5980881833c23caf5dd3a96d09651665.gif'></img>
                        <a className='sideBarLink'onClick={() => {this.props.logOut()}}>Log Out</a>
                    </span>
                </div>
            );
        } else {
            linksList = null;
        };

        let sideBar;
        if (this.state.sideBar) {
            sideBar = (
                    <nav style={animations.getAnimation('slideInLeft')} id='sideBar' className='sideBarExpanded' onMouseLeave={() => {this.collapseSideBar()}}>                             
                        {linksList}
                    </nav>
                );
        } else {
            sideBar = (
                    <nav id='sideBar' className='sideBarCollapsed' onMouseEnter={() => {this.expandSideBar()}}>
                    </nav>                    
            );
        };


        return(
            <header className='navHeader'>
                <StyleRoot>
                    <div className='sidebarCollapsed' style={animations.getAnimation('fadeIn')}>
                            {sideBar}
                    </div>
                </StyleRoot>
            </header>
        );
    };
};

// https://reactjs.org/docs/events.html#supported-events