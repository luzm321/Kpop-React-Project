import React, {Component} from 'react';
import NavBar from './NabBar/NavBar';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import Kpop from './Modals/Kpop';
import ApiManager from './Managers/ApiManager';
import LoginManager from './Managers/LoginManager';
// import { kpopData } from './KpopData';
import AddGroupModal from './Modals/addGroupModal';
import AddMemberModal from './Modals/addMemberModal';

let stateToChange;
let patchedGroupObject;
let patchedMemberObject;
let apiManager = new ApiManager();
let loginManager = new LoginManager();
let promise;

export default class ApplicationViews extends Component {

    state = {
        loginPage: true,
        navBar: false,
        groupModal: false,
        memberModal: false,
        pageComponents: {
            homePage: false,
        },
        data: [],
        members: [],
        users: []    
        // wikiData: {}  api wikipedia wiki bts
    };

    componentDidMount() {
        // since homePage should be false when starting out we set it as false inside our stateToChange empty object
        stateToChange = {
            homePage: false
        };
        apiManager.getGroups().then(groups => {
            console.log('groups', groups);
            let promise = new Promise((resolve, reject) => {
                let loop = () => {
                    // after getting all the groups we add a new property inside our stateToChange besides the homePage with its name from the
                    // database and we set it to false because the user is in loggin page when starting out.
                    // this is a dynamic way of adding as many states for however many pages you have in your database instead of hardcoding them
                    // since youll be adding new pages hardcoding their states wouldnt work.
                    groups.forEach(group => {
                        console.log('group name', group.name);
                        stateToChange[group.name] = false;
                    });
                };
                resolve(loop());
            });
            promise.then(() => {
                // after filling up our stateToChange object with all the properties set to false we stick it in state in the pageComponents property.
                console.log('setting state');
                this.setState({
                    data: groups,
                    pageComponents: stateToChange
                });
            });
        });
        apiManager.getMembers().then(members => {
            console.log('members', members);
            this.setState({
                members: members
            });
        });
        
        apiManager.getUsers().then(users => {
            console.log('users', users);
            this.setState({
                users: users
            });
        });
        loginManager.checkIfAuthenticated().then((bool) => {
            // checkIfAuthenticated method is returning a boolean value depending if the user has its username and password in
            // sessionStorage and if it exists in the database, if they do it returns true so we made a condition, if its true we
            // will set the homepage to true as we want the app to not make them sign in if they already had in the past, only if they stay in the
            // same tab, if they close it then it wont work.
            if (bool) {
                stateToChange = {
                    homePage: true
                }
                promise = new Promise((resolve, reject) => {
                    let loop = () => {
                        // so this loops through the state object and then we set a condition
                        for (let state in this.state.pageComponents) {
                            // if the state doesnt equal homePage then set it to false and then we add it to stateToChange
                            if (state !== 'homePage') {
                                stateToChange[state] = false
                            };
                        };
                    };
                    resolve(loop());
                });
                promise.then(() => {
                    console.log('state to change', stateToChange);
                    this.setState({
                        loginPage: false,
                        navBar: true,
                        pageComponents: stateToChange
                    });
                });
            };
        });
    };

    componentDidUpdate(prevProps, prevState) {
        // When adding a new group, since the data has changed we need to check and compare the previous data with the new.
        // pevState.data is the old data before adding a new group, this.state.data now holds the new data.
        if (prevState.data !== this.state.data) {
            // we loop through the new data because thats the one that contains the new group.
            this.state.data.forEach(group => {
                // we set a condition, if while tyring to find the same groups in the old data as there are in the new, when it encounters the newly
                // created group it will come back as undefined because it didnt exist yet. At this point we grab the whole new state, we create
                // a stateToChange variable that holds all of the new state and then we tell it to just add a new property with the newly created
                // group into stateToChange.pageComponents and set its value to false, then we set the state.
                if (typeof prevState.data[group.name] === 'undefined') {
                    stateToChange = this.state
                    stateToChange.pageComponents[group.name] = false;
                    this.setState(stateToChange);
                };
            });    
        };
    };

    handleLoginState = (usernameAndPassword) => {
        loginManager.authenticate(usernameAndPassword).then((bool) => {
            // if the authentication passes and the password and username exist then check to see if the boolean is true
            if (bool) {
                // if it is true then we create a state to change with the homepage set to true as we are redirecting the user to it
                stateToChange = {
                    homePage: true
                }
                // this loop inside a promise is to make sure that all the other page states are still false when the homepage is set to true
                // because if we dont do this then all the other page states will dissapear and will be replaced by just 1 homepage state of true
                promise = new Promise((resolve, reject) => {
                     // we wrap the loop in a function so that we can resolve the function after its done, if we just resolve anything inside the loop
                    // then it will only loop once and resolve.
                    let loop = () => {
                        // what this loop does is that it loops through state and adds every pageComponent state that isnt homepage to the state to
                        // change and it sets it as false
                        for (let state in this.state.pageComponents) {
                            if (state !== 'homePage') {
                                stateToChange[state] = false
                            };
                        };
                    };
                     // if you want to tell your promise that after you are done looping you should return the proise, then you need to resolve
                    // the invoked function
                    resolve(loop());
                });
                // after doing that ^ we are going to stick our stateToChange object into the state, specifically in the pageComponents property
                promise.then(() => {
                    console.log('state to change', stateToChange);
                    this.setState({
                        loginPage: false,
                        navBar: true,
                        pageComponents: stateToChange
                    });
                });
            } else {
                alert('The combination of password and username did not exist, please try again!');
            };
        });
    };

    // for logging out, we do not have to set homepage to true so we just let the loop set all of the states in pageComponents to false
    logOut = () => {
        stateToChange = {}
        promise = new Promise((resolve, reject) => {
            let loop = () => {
                for (let state in this.state.pageComponents) {
                    stateToChange[state] = false
                };
            };
           
            resolve(loop());
        });
        promise.then(() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            this.setState({
                loginPage: true,
                navBar: false,
                pageComponents: stateToChange
            });
        });
    };

    // changeState method is used to be able to switch from page to page, it changes the state of the page name they clicked on in the navbar
    // to true and the others to false.
    // the componentId is being passed here from the navbar, each of the pages has an id which matches the name of its state in
    // the state in applications views
    changeState = (componentId) => {
        // first we are making a new array of just the keys of the properties inside the state pageComponents property
        let arrayOfStatePages = Object.keys(this.state.pageComponents);
        console.log('arrayOfPages', arrayOfStatePages, 'id', componentId);
        // then we create an empty object that will be sent to the state once its filled up
        stateToChange = {};
        let promise = new Promise((resolve, reject) => {
            console.log('its in promise');
            // we loop through all of the pageComponent properties which are the page states
            let loop = arrayOfStatePages.forEach(pageState => {
                // we set a condition that says if the componentId passed from the navbar which is whichever page name theyve clicked on is the same
                // as the current pageState in the iteration and that pageState in state is false then we add it to the empty stateToChange as true
                if (componentId === pageState && this.state.pageComponents[pageState] === false) {
                    console.log('match', pageState);
                    stateToChange[componentId] = true
                } else {
                    // if its true we change it to false
                    console.log('not match', pageState);
                    stateToChange[pageState] = false
                };
            });
            resolve(loop);
        });
        promise.then(() => {
            console.log('changing the state');
            this.setState({pageComponents: stateToChange});
        });
    };

    createNewGroup = (newGroupObject) => {
        apiManager.addGroup(newGroupObject).then(response => {
            alert("You've added a new Kpop Group!");
            apiManager.getGroups().then(groups => {
                this.setState({
                    data: groups
                });
            });
        });
    };

    deleteKpopGroup = (modalId) => {
        apiManager.deleteGroup(modalId).then(response => {
            alert("You've deleted a Kpop Group!");
            apiManager.getGroups().then(groups => {
                this.setState({
                    data: groups
                })
            })
        })
    }

    createNewMember = (newMemberObject) => {
        apiManager.addMember(newMemberObject).then(response => {
            alert("You've added a new Kpop Member!");
            apiManager.getMembers().then(members => {
                this.setState({
                    members: members
                });
            });
        });
    };

     deleteKpopMember = (kpopGroupId) => {
        apiManager.deleteMember(kpopGroupId).then(response => {
            alert("You've deleted a Kpop Member!");
            apiManager.getMembers().then(members => {
                this.setState({
                    members: members
                })
            })
        })
    }

    patchKpopGroup = (modalId, editedGroupObject) => {
        patchedGroupObject = {};
        patchedGroupObject = apiManager.patchGroup(modalId, editedGroupObject ).then(response => {
            alert("You've edited a Kpop Group!");
            apiManager.getGroups().then(groups => {
                this.setState({
                    data: groups
                });
            });
        });
    };

    patchKpopMember = (kpopGroupId, editedMemberObject) => {
        patchedMemberObject = {};
        patchedMemberObject = apiManager.patchMember(kpopGroupId, editedMemberObject).then(response => {
            alert("You've edited a Kpop Member!");
            apiManager.getMembers().then(members => {
                this.setState({
                    members: members
                });
            });
        });
    };

    createNewUser = (newUserObject) => {
        console.log('USER OBJECT', newUserObject);
        apiManager.addUser(newUserObject).then(response => {
            alert("You've registered and created a new account!");
            apiManager.getUsers().then(users => {
                this.setState({
                    users: users
                });
            });
        });
    };

    // function for wikipedia bts api
    clickIt = () => {
        // let promise = new Promise((resolve, reject) => {
        //     apiManager.getData().then(data => {
        //         console.log('data', data);
        //         this.setState({
        //             wikiData: data.query.pages['39862325'].extract 
        //         })
        //     })
        // })
        

        // promise.then(() => {
        //     console.log(this.state.wikiData);
        // });
        for (let state in this.state.pageComponents) {
            console.log('state', state);
        };
    };     
//Explain toggleModal
    toggleModal = (modalId, kpopGroupId) => {
        stateToChange = {};
        if (this.state[modalId]) {
            console.log('its true')
            stateToChange[modalId] = false;
            this.setState(stateToChange);
        } else {
            console.log('its false')
            stateToChange[modalId] = true;
            stateToChange["kpopGroupId"] = kpopGroupId
            this.setState(stateToChange);
        };
    };

    render() {

        // this is a conditional render, first we set a variable with a name that represents the component
        let homePage;
        // then we make a condition that if the state of the same name is true then render the component
        if (this.state.pageComponents.homePage) {
            homePage = <HomePage />
        } else {
            // if the state of the names component is false then do not render it
            homePage = null;
        };

        let loginPage;

        if (this.state.loginPage) {
            loginPage = <LoginPage handleLoginState={this.handleLoginState} createNewUser={this.createNewUser} />
        } else {
            loginPage = null;
        };

        let navBar;

        if (this.state.navBar) {
            navBar = <NavBar changeState={this.changeState} logOut={this.logOut} toggleModal={this.toggleModal} kpopData={this.state.data}/>
        } else {
            navBar = null;
        };

        let groupModal;

        if (this.state.groupModal) { 
            groupModal = <AddGroupModal show={this.state.groupModal} toggleModal={this.toggleModal} createNewGroup={this.createNewGroup} />
        } else {
            groupModal = null;
        };

        let memberModal;

        if (this.state.memberModal) { 
            memberModal = <AddMemberModal show={this.state.memberModal} toggleModal={this.toggleModal} createNewMember={this.createNewMember}  kpopGroupId={this.state.kpopGroupId} />
        } else {
            memberModal = null;
        };

      

        return(
            <div>
                <head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia|New Tegomin|Train One|East Sea Dokdo|Kaushan Script|Gorditas"></link>
                </head>
                {navBar}
                {groupModal}
                {memberModal}
                {homePage}
                {loginPage}
                {this.state.data.map(data => {
                    if (this.state.pageComponents[data.name]) {
                        return <Kpop kpopData={data} kpopMembers={this.state.members} toggleModal={this.toggleModal} deleteKpopGroup={this.deleteKpopGroup} deleteKpopMember={this.deleteKpopMember} patchKpopMember={this.patchKpopMember} patchKpopGroup={this.patchKpopGroup}/>
                    } else {
                        return null;
                    }
                })}
                {/* <button onClick={() => {this.clickIt()}}>see wiki data</button> */}
            </div>
        );
    };
};