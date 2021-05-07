
export default class ApiManager {
    
    constructor() {}

    // getData = () => {
    //     return fetch ('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=BTS&format=json').then(response => {
    //         return response.json();
    // }).catch(e => {
    //         console.log(e);
    //     });
    // }              getting data bts intro from wikipedia wiki

    getGroups = () => {
        return fetch('http://localhost:8088/groups').then(response => {
            console.log('response', response);
            return response.json();
        });
    };

    getMembers = () => {
        return fetch('http://localhost:8088/members').then(response => {
            console.log('response', response);
            return response.json();
        });
    };

    getUsers = () => {     
        try {
            return fetch("http://localhost:8088/users").then(response => {
                console.log('response', response);
                return response.json();
        });
        } catch (e) {
            console.error(e);
        };
    };

    addGroup = (groupToAdd) => {
        return fetch('http://localhost:8088/groups', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(groupToAdd)
        }).then(response => response.json());
    };

    addMember = (memberToAdd) => {
        return fetch(`http://localhost:8088/members`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(memberToAdd)
        }).then(response => response.json());
    };

    addUser = (userToAdd) => {
        console.log('user to add', userToAdd);
        try {
        return fetch('http://localhost:8088/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userToAdd)
        }).then(response => response.json())
        .catch(e => console.log(e));
        } catch (e) {
            console.error(e);
        }
    };                                              

    deleteGroup(modalId) {      
        try {
            return fetch(`http://localhost:8088/groups/${modalId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };


    deleteMember(memberId) {      
        try {
            return fetch(`http://localhost:8088/members/${memberId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };

    patchGroup(modalId, data) {
        try{
            return fetch(`http://localhost:8088/groups/${modalId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };

    patchMember(memberId, data) {
        try{
            console.log(memberId, JSON.stringify(memberId));
                return fetch(`http://localhost:8088/members/${memberId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(response => response.json());
        } catch (e) {
            console.error(e);
        };
    };

};