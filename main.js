//alert('Hello World');
//console.log('Hello world');
//console.error('This is an error')
//console.warn('This is a warning');

// setting up variables (var,let,const)
// var and const are the best we dont wanna use the var
let age =  30;
age = 19;
console.log(age);

// let variable can be changed but const reamins a constant valuse of const cant be changed.
// it cant be initialized without value unlike let

const surya = 69;
console.log(surya)

// data types
// primitives = Strings , Numbers, null, undefined, Symbols
const name = 'Jsuryaboi_08';
const agesurya = 19;
const rating = 6.9;
const isCOOL = true;
const x = null;
const y = undefined;
let z;
//console.log(typeof rating) -> to find the type of the datatype

// concatenation
console.log('MY name is Jeya surya');
console. log('my name is '+ name+' and i am '+ agesurya);
// template Sting
const hello =`my name is ${ name} and I am ${agesurya}`
console.log(hello);
///
//
//STRING PROPERTIES AND METHODS
const s = 'Hello world';
//console.log(s.length);
//console.log(s.toUpperCase()); -> function
 console.log(s.toLowerCase(s));
 console.log(s.substring(0,5).toUpperCase());
 //these function are stackable
 console.log(s.split(''));
 // the above funstions splits the variables into array and stores them
 // will be visible in the console itself
 const w = 'surya is so cool';
 console.log(w.split(', '));
 // arrays that hold multiple variables
 // new is a constructor
 const numbers = new Array(1,2,3,4,5);
 console.log (numbers);
 const fruits = ['apples', 'oranges', 10, true];
 // in  javascript we dont have to deal with same type of variables in a array 
 // we can use anmy number of variables of desired type.
 console.log(fruits[0]);
 // we can make changes in the array irrespective of it being an constant
fruits[2]= 69;
console.log(fruits);
// push method -> adds the desired data type to the last  of the array
fruits.push('mangoes');
// unshift add the element to the starting of the array
fruits.unshift('strawberries')
console.log(fruits);
// pop method -> removes the last element of the array
fruits.pop();
// to check if it is a array
console.log(fruits);
// finding the index
console.log(fruits.indexOf('strawberries'));

// object literals
const dum_person={
    firstname: 'Jeya Surya',
    secondname: 'shankar B',
    age: 19,
    hobbbies:['working out', 'playing pc games','music(singing and playng mridangam)'],
    // we can have sub classses inside of a main class.!!
    address:{
        street:'subramaniam street',
        city : 'chennai',
        state: 'Tamilnadu'
    }
}
console.log(dum_person);
console.log(dum_person.hobbbies[1]);
// we can pull different things out
//const {firstname,secondname}= dum_person;
//console.log(firstname);
// if it is an emmbedded object
const {firstname,secondname, address:{city}}= dum_person
console.log(city)
// direcctly add properties 
dum_person.email= 'winjeyasurya@gmail.com'
console.log(dum_person);
//
const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted:true
    },
    {
        id:2,
        text: 'u smart as hell',
        isCompleted:true
    },
    {
        id:3,
        text: 'u dum as hell',
        isCompleted:false
    }
];

console.log(todos[1])
//JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

//for loop
for(let  i= 0; i<10; i++){
console.log(i);
console.log(`for loop number: ${i}`);
}
// while loop
let i = 0;
while(i<10){
    console.log(`Whileloop number: ${i}`);
    i++;
}
// looping array list
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
};
//forof loop
for(let todo of todos){
    console.log(todo.text)
    console.log(todo.id)
}
// forEach, map , filter
todos.forEach(function(todo){
    console.log(todo.text);
})
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todos.Text);
const todofilt = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todofilt)
// conditionals
const X = 10;
if(X===10)// == symbol just check the value it doesnt care about the data type but === checks and matches the data type and also the value
{
    console.log('X is 10')
 
}else if(X<69){
    console.log('X might as well be a 69')
}else{
    console.log('X is defenitely 69')
}
// we can also use nested if statement
// '?' is the ternary operator(means 'then/if') and ':'(else) is a 
const C = 69;

const colour = C<10? 'blue' : 'red';
console.log(colour)

// switches
switch(colour){
    case'red':
      console.log('colour is red');
      break;
    case 'blue':
      console.log('colour is blue');
      break;
    default:
        console.log('colour is not blue or red');
        break;
}
// functions
function addnums(num1,num2){
//(1)console.log(num1+num2);
return num1+num2;
}

console.log(addnums(69,420))

//(1)addnums(69,420);
// if we do no give inputs to the function it shows NaN -> not a number.
// arrow function
const addnum = (num3 ,num4) =>{
    return num3+num4
};
console.log(addnum(5,5));

// object oriented programming
// constructor functions

function Person(firstname, lastname, dob){
    this.firstname=firstname
    this.lastname=lastname;
    this.dob=new Date(dob);
    this.getBrithYear = function(){
        return this.dob.getFullYear();
    }
    this.GetFUllname= function(){
        return `${this.firstname} ${this.lastname}`;
    }
    Person.prototype.getBrithYear = function(){
        return this.dob.getFullYear();
    }
    Person.prototype.GetFUllname= function(){
        return `${this.firstname} ${this.lastname}`;
    }
}
// instantiate object
// here in the date of birth area we can also call this using a string object but we can also use the more specific date object
const Person1 = new Person('JeyaSurya', 'Shankar', 31-10-2003);
const Person2 = new Person('Geen', 'joel gdj', '24.9.2004');
console.group(Person1.firstname);
console.log(Person1.dob.getFullYear());
console.log(Person1.GetFUllname());
// we can add functions to the object.

// es6
// class
class Person3 {
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname= lastname;
        this.dob = new Date(dob);
    }
    getBrithYear(){
        return this.dob.getFullYear();
    }
    GetFUllname(){
        return `${this.firstname} ${this.GetFUllname.lastname}`;
    }
    }
console.log(Person1)


// DOM

// selectors
// single element
console.log(window);
// window is the mother of the objects
// it is the highest level of object
console.log(document.getElementById('my-form'));
// we can even asssign to variable
console.log(document.querySelector('.container'));
// here this method being a single element selector it will select only the first h1
console.log(document.querySelector('h1'));

//Multiple elemt selector
console.log(document.querySelectorAll(`.item`));
//older method but is used for selecting the objects
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
//looping through

const items = document.querySelectorAll(`.item`);
items.forEach((item) => console.log(item));
// here it loops through and prints the list fully

// manipulating the dom
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Jsuryaboi_08'
ul.lastElementChild.innerHTML='<h1>Sup</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// // event listener basically check if the event is done and executes a function
// btn.addEventListener('click',(e) => {
//    e.preventDefault();//this line of code prevents the default action and makes the console log stay permanently if we click
//     // wihtout this the console logging hgappens once and only when the button is clicked
//     // the log basically flshes for a split second before dissapperaing in the console log.
//     // console.log('click');
//     // console.log(e);// this shows the full event object
//     // // target would give the actual element
//     // console.log(e.target.id)


//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     // these two lines are just for making the page interactive
//     // WE CAN DO DYNAMIC CSS STYLKING THROUGH JAVASCRIPT BUT NOT RECOMMENDED TO DO SO AS IT WOULD BECOME HARD.
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>';
//     // whole functionality i have used here works only when the submit button is clicked.
//     //  the whole function basically runs if the click is done 
//     //  we can give a mouseout event

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
   // console.log(nameInput.value);// if we just give just nameInput it just gives us the element
    // but for getting the value we need to add.value so that in the logs we get the actual name entered
    //now i design it so that it accepts the form only when both the sections are filled
    if(nameInput.value===''|| emailInput===''){
        //alert('please enter the feilds');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all feilds';
        setTimeout(()=>msg.remove(),3000)// 3000 ms
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        userList.appendChild(li);
        // Clear Feilds
        nameInput.value='';
        emailInput.value ='';

    }
}


