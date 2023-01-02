let courseDetails = []
let allCourses = []
/* Since this is not to be submitted I will not change this but this User Actor class is solely for the Students 
 Creating an Abstract Class For all Kind of students */
class UserActor {
    constructor(){
        if (this.constructor === `UserActor`){
            throw new Error (`Instanciating this class is impossible`)
        }
    }
    VeiwCourses = () => {
        for(let i = 0; i <= allCourses.length; i++){
            console.log(`${allCourses[i]} \n${courseDetails[i]}\n`);
        }
    }
    SignIn = ()=>{
        throw new Error('This cannot be done')
    }
    Login = ()=>{
        throw new Error('This cannot be done')
    }
    type = "Not Defined"
    signedIn = false
}
class DataBases {
    static FrontEnd = []
    static BackEnd = []
    static ProductDesign = []
    static Web3 = []
}
class FrontEnd extends UserActor {
    constructor () {
        super()
        this.type = 'Front end Development'
    }
    SignIn = (Name) => {
        if (this.signedIn !== true){
            this.signedIn = true
            console.log("You just signed in for Front End Development")
            DataBases.FrontEnd.push(Name)
            this.Login(Name)}
        else{
            console.log(`You cannot log more than one user on an account`);
        }
    } 
    Login = (Names) => {
        if(this.signedIn === true && DataBases.FrontEnd.indexOf(Names) !== -1){
            console.log(`Logging In ${Names}...`)
            console.log(`${Names} was successfully Logged in`)
        }
        else {
            console.log('You cannot be signed in for some reasons. Try Signing In')
        }
    }
}
class BackEnd extends UserActor {
    constructor () {
        super()
        this.type = 'Back end Development'
    }
    SignIn = (Name) => {
        if (this.signedIn !== true){
            this.signedIn = true
            console.log("You just signed in for Back End Development")
            DataBases.BackEnd.push(Name)
            this.Login(Name)}
        else{
            console.log(`You cannot log more than one user on an account`);
        }
    }
    Login = (Names) => {
        if(this.signedIn === true && DataBases.BackEnd.indexOf(Names) !== -1){
            console.log(`Logging In ${Names}...`)
            console.log(`${Names} was successfully Logged in`)
        }
        else {
            console.log('You cannot be signed in for some reasons. Try Signing In')
        }
    }
}
class ProductDesign extends UserActor {
    constructor () {
        super()
        this.type = 'UX/UI Design'
    }
    SignIn = (Name) => {
        if (this.signedIn !== true){
            this.signedIn = true
            console.log("You just signed in for Product Design")
            DataBases.ProductDesign.push(Name)
            this.Login(Name)}
        else{
            console.log(`You cannot log more than one user on an account`);
        }
    }
    Login = (Names) => {
        if(this.signedIn === true && DataBases.ProductDesign.indexOf(Names) !== -1){
            console.log(`Logging In ${Names}...`)
            console.log(`${Names} was successfully Logged in`)
        }
        else {
            console.log('You cannot be signed in for some reasons. Try Signing In')
        }
    }
}
class Web3 extends UserActor {
    constructor () {
        super()
        this.type = 'Web3'
    }
    SignIn = (Name) => {
        if (this.signedIn !== true){
            this.signedIn = true
            console.log("You just signed in for Web3")
            DataBases.Web3.push(Name)
            this.Login(Name)}
        else{
            console.log(`You cannot log more than one user on an account`);
        }
    }
    Login = (Names) => {
        if(this.signedIn === true && DataBases.Web3.indexOf(Names) !== -1){
            console.log(`Logging In ${Names}...`)
            console.log(`${Names} was successfully Logged in`)
        }
        else {
            console.log('You cannot be signed in for some reasons. Try Signing In')
        }
    }
}
// A Tutor is part of the Managementand the main stuff is to create courses and veiw all of its members
class Tutor {
    constructor(Name){
        this.Name = Name
    }
    // The details of the course is in text form and is very long so for clean code while calling on this details function thile entering the details you better use backticks ``
    createCourse = (NameofCourse, DetailsofCourse) => {
        allCourses.push(NameofCourse)
        courseDetails.push(DetailsofCourse)
    }
}
const Tappi = new Tutor('Tappi')
Tappi.createCourse(`Object Oriented Programming 1`, `TASK: UML Versions and UML modelling tools
UML Versions and modelling tools are software which enables a user to be able to model (make an architectural design) a project thus making it easier for him/her to explain what goes on his or her code without having to do a lot of explaining.
But in the course of its usage I kind of see UML modelling as better than UML modelling due to the following facts
1. UML modelling is more beginner friendly as to the fact that it is easy to learn 
2. UML modelling can be done locally thus making it less expensive than UML Versions
`)
Tappi.createCourse(`Object Oriented Programming 2`, `DIFFERENCES BETWEEN VAR, LET AND CONST KEYWORDS
For JavaScript programmers there are 3 ways to declare or initialize a variable and they are as follows 
1. Var Keyword: This is the first keyword introduced to JavaScript and has been the only one until 2015. This is a globally scoped declaration cos it can be altered without any contemplations knowingly or unknowingly in your code and this has been a problem cos this gives the hacker ability to alter a given variable without any single issue. Hence the let keyword
2. Let Keyword: This is the same as that of VAR except that it is locally/ block scoped and cannot be reassigned in the same scope i.e. a function, a loop, a nested if statement and soon
3. Const Keyword: The const keyword is a keyword used for constants i.e. Values that can never change in life or in this case throughout your code examples of values one can use const keyword to declare is pi = 3.14 because this will never change 
`)
class Management {
    constructor(Name){
        this.Name = Name
    }
    veiwUsers = ()=>{
        console.log(`${DataBases.FrontEnd.toString()}, ${DataBases.BackEnd.toString()}, ${DataBases.ProductDesign.toString()}, ${DataBases.Web3.toString()}`)
    }    
}
const Gospel = new BackEnd()
Gospel.SignIn('Gospel')
const me = new Management('Chimzy')
me.veiwUsers()
// A little modification is that for every new tutor he or she is to be added to the database and should be able to be veiwed by the Managment