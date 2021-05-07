// Conditional Render Example:

// import React, {Component} from "react"


// export default class App extends Component {
//     state = {
//         logStatus: false
//     };
    
//     componentDidMount() {
//         console.log('mounted', this.state.logStatus)
//     }
    
//     logIn = () => {
//         this.setState({
//             logStatus: true
//         });
//         console.log('logStatus after logIn click', this.state.logStatus)
//     };
//     logOut = () => {
//         this.setState({
//             logStatus: false
//         });
//         console.log('logStatus after logOut click', this.state.logStatus)
//     };
                
    
//     render() {
        
//         let loggingStatus;
//             if (this.state.logStatus) {
//                 loggingStatus = (<h1>You are logged in.</h1>)
//             } else {
//                 loggingStatus = (<h1>You are logged out.</h1>)
//             };
        
//         return (
//             <div>
//                 {loggingStatus}
//                 <button onClick={() => {this.logIn()}}>Log In</button>
//                 <button onClick={() => {this.logOut()}}>Log Out</button>
//             </div>
//         );
//     };
// };

// ___________________________________________________________________________________________________________
// FETCHING DATA FROM AN API IN REACT:

// FIRST WAY:

// import React, {Component} from 'react';


// export default class App extends Component {
//     state = {
//         dataState: {},
//         dataValues: []
//     }
    
//     componentDidMount() {
//        this.getData().then(() => {
//            // once data is fetched proceed to loop through object and make array
//            this.loopThroughObjectsAndMakeArray().then(objectValuesArray => {
//                // once finished making array of object values stick it in state
//                this.setState({
//                    dataValues: objectValuesArray
//                })
//            })
//        })
//     }
    
//     loopThroughObjectsAndMakeArray = () => {
//         // set up empty array
//         let dataValuesArray = [];
//          let promise2 = new Promise((resolve, reject) => {
//              // make a function that loops through object
//                let loop = () => {
//                    for (let x in this.state.dataState) {
//                        // stick object values in empty array (making a new array)
//                         dataValuesArray.push(this.state.dataState[x]);
//                     } 
//                }
//                // once done looping resolve it
//                resolve(loop());
//            });
//         return promise2.then(() => {
//             // return the array once its been filled up with values
//             return dataValuesArray;
//         })
//     }
    
//     getData = () => {
//         // make a promise with the fetch inside
//         let promise = new Promise((resolve, reject) => {
//            fetch("https://swapi.dev/api/people/1/")
//         .then(response => response.json())
//         .then(data => resolve(this.setState({dataState: data})))
//         });
//         // once fetch is completed return promise
//         return promise;
//     }
    
//     consoleLogState = () => {
//         console.log(this.state.dataValues);
//     }
    
    
//     render() {
        
        
//         return (
//             <div>
//                 <button onClick={() => {this.consoleLogState()}}>Console Log State</button>
//                 {this.state.dataValues.map(items =>
//                     <p>{items}</p>
//                 )}
//             </div>
//         )
//     }
// }

// _________________________________________________________________________________________________________________________________

// SECOND WAY:

// import React, {Component} from 'react';


// export default class App extends Component {
//     state = {
//         dataState: {},
//         dataValues: []
//     }
    
//     componentDidMount() {
//        this.getData().then(() => {
//            // once data is fetched proceed to loop through object and make array
//            this.loopThroughObjectsAndMakeArray().then(objectValuesArray => {
//                // once finished making array of object values stick it in state
//                this.setState({
//                    dataValues: objectValuesArray
//                })
//            })
//        })
//     }
    
//     loopThroughObjectsAndMakeArray = () => {
//         // set up empty array
//         let dataValuesArray = [];
//          let promise2 = new Promise((resolve, reject) => {
//              // make a function that loops through object
//                let loop = () => {
//                    for (let x in this.state.dataState) {
//                        // stick object values in empty array (making a new array)
//                         dataValuesArray.push(this.state.dataState[x]);
//                     } 
//                }
//                // once done looping resolve it
//                resolve(loop());
//            });
//         return promise2.then(() => {
//             // return the array once its been filled up with values
//             return dataValuesArray;
//         })
//     }
    
//     getData = () => {
//         // make a promise with the fetch inside
//         let promise = new Promise((resolve, reject) => {
//            fetch("https://swapi.dev/api/people/1/")
//         .then(response => response.json())
//         .then(data => resolve(this.setState({dataState: data})))
//         });
//         // once fetch is completed return promise
//         return promise;
//     }
    
//     consoleLogState = () => {
//         console.log(this.state.dataValues);
//     }
    
    
//     render() {
        
//           let paragraphs = this.state.dataValues.map(items =>
//                     <p>{items}</p>
//                 )
        
//         return (
//             <div>
//                 <button onClick={() => {this.consoleLogState()}}>Console Log State</button>
//                 {paragraphs}
//             </div>
//         )
//     }
// }

// __________________________________________________________________________________________________________________________________

// EXAMPLE OF EVENT HANDLER

// import React, {Component} from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

// export default class App extends Component {
//    state = {
//        todos: todosData,
//    };
    
//     handleChange(id) {
//         let promise = new Promise((resolve, reject) => {
//             let updatedTodos = this.state.todos.map(todoItem => {
//                 if(id === todoItem.id) {
//                     todoItem.completed = !todoItem.completed;
//                 };
//                 return todoItem;
//             });
//             resolve(updatedTodos);
//         });
      
//         promise.then(updatedTodos => {
//             this.setState({
//                 todos: updatedTodos
//             });
//         });        
//     };
       
//     render() {
//         const todoItems = this.state.todos.map(
//             item => <TodoItem key={item.id} item={item} handleChange={() => {this.handleChange(item.id)}}/ >
//         )
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// export default class TodoItem extends Component {
    
    
//     render() {
//         return (
//             <div className="todo-item">
//                 <input 
//                     type="checkbox" 
//                     checked={this.props.item.completed} 
//                     onClick={() => {this.props.handleChange(this.props.item.id)}}
//                 />
//                 <p>{this.props.item.text}</p>
//             </div>
//         )
//     }
// }

//  Another example of API fetch get call:

// import React, {Component} from "react"

// // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// // https://swapi.co/
// // https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//         this.setState({loading: true})
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })
//     }
    
//     render() {
//         const text = this.state.loading ? "loading..." : this.state.character.name
//         return (
//             <div>
//                 <p>{text}</p>
//             </div>
//         )
//     }
// }

// export default App

// ____________________________________________________________________________________________________________________________

// EXAMPLE OF FORMS:

// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({
//             [name]: value
//         })
//     }
    
//     render() {
//         return (
//             <form>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//             </form>
//         )
//     }
// }

// export default App

// __________________________________________________________________________________________________________________

// Forms Example:

// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 />
                
//                 {
//                     /**
//                      * Other useful form elements:
//                      * 
//                      *  <textarea /> element
//                      *  <input type="checkbox" />
//                      *  <input type="radio" />
//                      *  <select> and <option> elements
//                      */
//                 }
                
//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
                
//                 <br />
                
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />
                
//                 <label>Favorite Color:</label>
//                 <select 
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
                
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default App

// ___________________________________________________________________________________________________________

// Another EXAMPLE OF FORMS TO USE:

// import React, {Component} from "react"

// /**
//  * Challenge: Wire up the partially-finished travel form so that it works!
//  * Remember to use the concept of controlled forms
//  * https://reactjs.org/docs/forms.html
//  * 
//  * All information should be populating the text below the form in real-time
//  * as you're filling it out
//  * 
//  * This exercise is adapted from the V School curriculum on vanilla JS forms:
//  * https://coursework.vschool.io/travel-form/
//  * 
//  * All of our challenges and learning resources are open for the public
//  * to play around with and learn from at https://coursework.vschool.io
//  */

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "",
//             isVegan: false,
//             isKosher: false,
//             isLactoseFree: false
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState({
//                 [name]: checked
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input 
//                         name="firstName" 
//                         value={this.state.firstName} 
//                         onChange={this.handleChange} 
//                         placeholder="First Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="lastName" 
//                         value={this.state.lastName}
//                         onChange={this.handleChange} 
//                         placeholder="Last Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="age" 
//                         value={this.state.age}
//                         onChange={this.handleChange} 
//                         placeholder="Age" 
//                     />
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="male"
//                             checked={this.state.gender === "male"}
//                             onChange={this.handleChange}
//                         /> Male
//                     </label>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="female"
//                             checked={this.state.gender === "female"}
//                             onChange={this.handleChange}
//                         /> Female
//                     </label>
                    
//                     <br />
                    
//                     <select 
//                         value={this.state.destination} 
//                         name="destination" 
//                         onChange={this.handleChange}
//                     >
//                         <option value="">-- Please Choose a destination --</option>
//                         <option value="germany">Germany</option>
//                         <option value="norway">Norway</option>
//                         <option value="north pole">North Pole</option>
//                         <option value="south pole">South Pole</option>
//                     </select>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isVegan"
//                             onChange={this.handleChange}
//                             checked={this.state.isVegan}
//                         /> Vegan?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isKosher"
//                             onChange={this.handleChange}
//                             checked={this.state.isKosher}
//                         /> Kosher?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isLactoseFree"
//                             onChange={this.handleChange}
//                             checked={this.state.isLactoseFree}
//                         /> Lactose Free?
//                     </label>
//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.destination}</p>
//                 <p>Your dietary restrictions:</p>
                
//                 <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
//                 <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
//                 <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                
//             </main>
//         )
//     }
// }

// export default App

// Example of FORM to make container:

// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "",
//             isVegan: false,
//             isKosher: false,
//             isLactoseFree: false
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState({
//                 [name]: checked
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input 
//                         name="firstName" 
//                         value={this.state.firstName} 
//                         onChange={this.handleChange} 
//                         placeholder="First Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="lastName" 
//                         value={this.state.lastName}
//                         onChange={this.handleChange} 
//                         placeholder="Last Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="age" 
//                         value={this.state.age}
//                         onChange={this.handleChange} 
//                         placeholder="Age" 
//                     />
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="male"
//                             checked={this.state.gender === "male"}
//                             onChange={this.handleChange}
//                         /> Male
//                     </label>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="female"
//                             checked={this.state.gender === "female"}
//                             onChange={this.handleChange}
//                         /> Female
//                     </label>
                    
//                     <br />
                    
//                     <select 
//                         value={this.state.destination} 
//                         name="destination" 
//                         onChange={this.handleChange}
//                     >
//                         <option value="">-- Please Choose a destination --</option>
//                         <option value="germany">Germany</option>
//                         <option value="norway">Norway</option>
//                         <option value="north pole">North Pole</option>
//                         <option value="south pole">South Pole</option>
//                     </select>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isVegan"
//                             onChange={this.handleChange}
//                             checked={this.state.isVegan}
//                         /> Vegan?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isKosher"
//                             onChange={this.handleChange}
//                             checked={this.state.isKosher}
//                         /> Kosher?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isLactoseFree"
//                             onChange={this.handleChange}
//                             checked={this.state.isLactoseFree}
//                         /> Lactose Free?
//                     </label>
//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.destination}</p>
//                 <p>Your dietary restrictions:</p>
                
//                 <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
//                 <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
//                 <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                
//             </main>
//         )
//     }
// }

// export default App


// ________________________________________________________________________________________________________________________________________________


// React Meme Generator Capstone Project:

// In index.js:

// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"

// ReactDOM.render(<App />, document.getElementById("root"))

// In App.js:

// import React from "react"
// import Header from "./Header"
// import MemeGenerator from "./MemeGenerator"

// function App() {
//     return (
//         <div>
//             <Header />
//             <MemeGenerator />
//         </div>
//     )
// }

// export default App

// In Header.js:

// import React from "react"

// function Header() {
//     return (
//         <header>
//             <img 
//                 src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
//                 alt="Problem?"
//             />
//             <p>Meme Generator</p>
//         </header>
//     )
// }

// export default Header

// In MemeGenerator.js:

// import React, {Component} from "react"

// class MemeGenerator extends Component {
//     state = {
//             topText: "",
//             bottomText: "",
//             randomImg: "http://i.imgflip.com/1bij.jpg",
//             allMemeImgs: []
//         }
    
//     componentDidMount() {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(response => response.json())
//             .then(response => {
//                 const {memes} = response.data
//                 this.setState({ allMemeImgs: memes })
//             })
//     }
    
//     handleChange = (event) => {
//         const {name, value} = event.target
//         this.setState({ [name]: value })
//     }
    
//     handleSubmit = (event) => {
//         event.preventDefault()
//         const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
//         const randMemeImg = this.state.allMemeImgs[randNum].url
//         this.setState({ randomImg: randMemeImg })
//     }
    
//     render() {
//         return (
//             <div>
//                 <form className="meme-form" onSubmit={this.handleSubmit}>
//                     <input 
//                         type="text"
//                         name="topText"
//                         placeholder="Top Text"
//                         value={this.state.topText}
//                         onChange={this.handleChange}
//                     /> 
//                     <input 
//                         type="text"
//                         name="bottomText"
//                         placeholder="Bottom Text"
//                         value={this.state.bottomText}
//                         onChange={this.handleChange}
//                     /> 
                
//                     <button>Gen</button>
//                 </form>
//                 <div className="meme">
//                     <img src={this.state.randomImg} alt="" />
//                     <h2 className="top">{this.state.topText}</h2>
//                     <h2 className="bottom">{this.state.bottomText}</h2>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MemeGenerator

// Ideas for project
https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

// ______________________________________________________________________________________________________________________________

// React Meme Generator Capstone Project:

// In index.js:

// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"

// ReactDOM.render(<App />, document.getElementById("root"))

// In App.js:

// import React from "react"
// import Header from "./Header"
// import MemeGenerator from "./MemeGenerator"

// function App() {
//     return (
//         <div>
//             <Header />
//             <MemeGenerator />
//         </div>
//     )
// }

// export default App

// In Header.js:

// import React from "react"

// function Header() {
//     return (
//         <header>
//             <img 
//                 src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
//                 alt="Problem?"
//             />
//             <p>Meme Generator</p>
//         </header>
//     )
// }

// export default Header

// In MemeGenerator.js:

// import React, {Component} from "react"

// class MemeGenerator extends Component {
//     constructor() {
//         super()
//         this.state = {
//             topText: "",
//             bottomText: "",
//             randomImg: "http://i.imgflip.com/1bij.jpg",
//             allMemeImgs: []
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    
//     componentDidMount() {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(response => response.json())
//             .then(response => {
//                 const {memes} = response.data
//                 this.setState({ allMemeImgs: memes })
//             })
//     }
    
//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({ [name]: value })
//     }
    
//     handleSubmit(event) {
//         event.preventDefault()
//         const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
//         const randMemeImg = this.state.allMemeImgs[randNum].url
//         this.setState({ randomImg: randMemeImg })
//     }
    
//     render() {
//         return (
//             <div>
//                 <form className="meme-form" onSubmit={this.handleSubmit}>
//                     <input 
//                         type="text"
//                         name="topText"
//                         placeholder="Top Text"
//                         value={this.state.topText}
//                         onChange={this.handleChange}
//                     /> 
//                     <input 
//                         type="text"
//                         name="bottomText"
//                         placeholder="Bottom Text"
//                         value={this.state.bottomText}
//                         onChange={this.handleChange}
//                     /> 
                
//                     <button>Gen</button>
//                 </form>
//                 <div className="meme">
//                     <img src={this.state.randomImg} alt="" />
//                     <h2 className="top">{this.state.topText}</h2>
//                     <h2 className="bottom">{this.state.bottomText}</h2>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MemeGenerator

// ________________________________________________________________________________________________________________________________________

// Hooks: Hook into state and lifecycle methods of components without using classes.

// useState(){} Hook: hooks into state and returns an array (const [arr, fxn] = useState("value") as we are expected to use array destructuring when we get this value

// import React, { useState } from "react"

// function App() {
//     const [ answer ] = useState("Yes")
    
//     return (
//         <div>
//             <h1>Is state important to know? {answer}</h1>
//         </div>
//     )
// }

// ___________________________________________________________________________________________________

// Changing State of useState() method:

// import React, {useState} from "react"


// function App() {
//     const [count, setCount] = useState(0)
//     const [answer, setAnswer] = useState("Yes")
    
//     function increment() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function decrement() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// export default App

// _____________________________________________________________________________________________________________


// useEffect(){} Hook: Hooks into lifecycle component that replaces (componentDidMount,componentDidUpdate, componentWillUnmount)

// import React, {useState, useEffect} from "react"
// import randomcolor from "randomcolor"

// function App() {
//     const [count, setCount] = useState(0)
//     const [color, setColor] = useState("")
    
//     function increment() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function decrement() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     useEffect(() => {
//         setColor(randomcolor())
//     }, [count])
    
//     return (
//         <div>
//             <h1 style={{color: color}}>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// export default App













