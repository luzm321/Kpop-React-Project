
import ApiManager from './ApiManager'
let apiManager = new ApiManager();
let usersDataPromiseArray = new Array();

let username;
let password;

export default class LoginManager {
    constructor() {};    
    //
    checkIfAuthenticated() {
        return apiManager.getUsers().then(users => {
            // after getting all the users we loop through the users array
            for (let i = 0; i < users.length; i++) {
                // we set a condition that if the user iteration username is the same as the one in sessionStorage then return true and break; the loop
                if (sessionStorage.getItem("username") === users[i].username) {
                    return true;
                    break;
                } else {
                    // if it isnt then return false
                    return false;
                };
            };
        });
    };

    authenticate(usernameAndPassword) {
        return apiManager.getUsers().then(users => {
            // after getting all the users we loop through the users array
            for (let i = 0; i < users.length; i++) {
                // we set a condition that in that iteration if the username matches with the username and password from state then proceed
                if (users[i].username === usernameAndPassword.username && users[i].password === usernameAndPassword.password) {
                    // it sets their username and password in sessionStorage and then returns true and then it ends the loop with a break;
                    let username = users[i].username;
                    let password = users[i].password;
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('password', password);
                    return true;
                    break;
                } else {
                    // if the username and password didnt match then it returns false.
                    return false;
                };
            };
        });
    };       
};