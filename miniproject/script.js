// let user={
//     name:"jhon",
//     money:1000,

//     [Symbol.toPrimitive](hint){
//         alert(`hint:${hint}`)
//        return hint=='string'?this.name:this.money
//     }
// }

// alert(user)
// alert(+user)
// alert(user+1500)


// user={name:"jhon",
//     money:"4000",

//    toString(){

//         return this.name
//     },
//     valueOf(){
// return this.money
//     }
// }

// alert(user)
// alert(+user)
// alert(user+1500)

// let str = 'i am shree as i can do cycling aswell as i bike can riding'
// let pos = 0;
// while (true) {
//     let found = str.indexOf('as',pos);
//     if (found == -1) break;
//     alert(found)
//     pos = found + 1;
// }


//  setTimeOut
//===============

// function set(from, to) {
//     let current = from;
//    let  timerID = setInterval(() => {
//         alert(current)
//         if (current == to) {
//             clearInterval(timerID)
//         }
//         current++;
//     }, 1000)
// }
// set(5, 10)



//    setInterval
//=================

// let timerId=setInterval(()=>{
//     alert("hello")
// },4000)

// setTimeout(()=>{
//     clearInterval(timerId);alert("stop")
// },8000)



// nested setTimeOut instead of setInterval
//===========================================

// let timerId=setTimeout(function fun(){
//     alert("hello");
//    let timerId=setTimeout(fun,2000);
// },2000)


//setInterval
//==============

// function printNumber(from, to) {
//     let current = from;
//     timerId = setInterval(() => {
//         alert(current)

//         if (current == to) {
//             clearInterval(timerId)
//         }
//         current++;
//     },2000)
// }
// printNumber(5, 10);



//setTimeOut
//===============

// function printNumber(from, to) {
//     let current = from;
//     let timerId = setTimeout(function go() {
//         alert(current)
//         if (current < to) {
//             setTimeout(go, 1000)
//         }
//         current++
//     }, 1000)
// }
// printNumber(5, 10)


//function binding
//=====================

// let user={
//     firstName:"shreedhar",

//     func(phrase){
//         alert(phrase+ ': '+this.firstName)
//     }
// }
// let sayHi=user.func.bind(user)
// sayHi('Hello')
// setTimeout(sayHi,1000)


//function binding
//==================

// let man={
//     name:"kiran",
// }
//  man={
//     name:"laxman",
// }
// function girl(hello){
//     alert(hello +': '+this.name)
// }
// let geek=girl.bind(man);

// geek('shreedhar')


// let user={
//     name:"shreedhar",
//     say(){
//         alert(`hello:${this.name} now the time is [${new Date().getHours()+':'+new Date().getMinutes()}]`)
//     }
// }

// let sayNow=user.say.bind(user)
// sayNow();



// function print(ok, fail) {
//     let password = prompt('password', '')
//     if (password == 'rockstar') { ok() } else { fail() }

// }

// let user = {
//     name: "shreedhar",

//     loginOk() {
//         alert(`${this.name} :   enterend`)
//     },
//     loginFail() {
//         alert(`${this.name}: not enterend` )
//     }
// }
// print(user.loginOk.bind(user), user.loginFail.bind(user))






// sayHi.count=0;
// function sayHi(){
//     // alert("hello");
//    return sayHi.count++;
// }


// alert(sayHi())
// alert(sayHi())

// alert(sayHi.count)

// function makeCounter() {

//     function counter() {

//         return counter.count++;
//     }
//     counter.count = 0;

//     return counter
// }

// let counter = makeCounter()

// alert(counter())
// alert(counter())
// alert(counter.count)

// let sayHi=function func(who){
//     alert(`hello:${who}`)
// }
// sayHi('jhon')

// let sayHi=function func(who){
// if(who){
//     alert(`hello: ${who}`)
// }else{func("guest")}
// }
// welcome=sayHi
// sayHi=null
// welcome()

// let user={
//     name:"shreedhar",
//     age:38,
//     occupation:"student"
// }
// for(let key in user)
//     alert(user[key]);



// let man=['BMW','MERCEDEBENZ','AUDI'];
//     for(let lead of man){
//         alert(lead)
//     }


// let user={
//     name:"kiran",
//     age:35,
//     occupation:"student",

//    get fullName(){
//        return (`hello:${this.name} and your age is ${this.age} and your occupation is ${this.occupation}`)
//     }
// }
// alert(user.fullName)


//prototype
//================================================================================================

// function person() {

// }

// let s1 = 'shredar shiragumpi'
// console.log(s1.__proto__) //string
// console.log(s1.__proto__.__proto__.__proto__) //null

// class s2 {
// }

// console.log(s2.prototype) // for the class we use prototype
// let p1 = new s2()
// console.log(p1.__proto__)





// let animal = {eats: true}
// function Rabbit() {
// }
// // Rabbit.prototype=animal
// // let rabbit = new Rabbit()
// (Rabbit.__proto__ = animal);  //for object functions methods we use __proto__, in javascript everthing is object thats why it always show objects
// console.log(Rabbit.eats)


// function gave(){
//     s4={
//         walks:true
//     }
// }
// let save=new gave()
// // console.log(save.walks)
// console.log(gave.prototype)


//getter and setter prototype
//============================================================================================

// let animal={
//     eats:true
// }
// rabbit=Object.create(animal)// this is same as {rabbit.__proto__:animal} (this inherits the animal object)
// console.log(rabbit.eats)
// console.log(Object.getPrototypeOf(rabbit)) //getting the prototype of rabbit
// console.log(Object.setPrototypeOf(rabbit,{walks:true,jumps:false})) //setting property in rabbit


//class inheritence
//=========================================================================================

// class animal {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//     run() {
//         alert(`${this.name} runs with speed ${this.speed}`)
//     }
// }

// class Rabbit extends animal {
//     stop() {
//         alert(`${this.name} jums with high distance`)
//     }
// }
// let rabbit = new Rabbit('jjhon', 10);
// rabbit.run();
// rabbit = new Rabbit("tiger")
// rabbit.stop()

//rabbit prototypical inheriting animal usinf create
//===========================================================

// let animal={
//     eats:true,
// }
// let rabbit=Object.create(animal)
// console.log(rabbit)

//==================================================================================================

// function pow (x, n){
// if(n<0){
//     alert("higher number")
// }else{
//    let result=1;
//    for (let i=0;i<n;i++)
//    {
//     result*=x;
//    }
//    return result;
// }
// }
// pow(5,6)

//=================================================================================================

// let calculator = {
//     sum() {
//         return  a + b;
//     },
//     mul() {
//         return  a * b
//     },
//     read() {
//         a = Number(prompt('a?', 0))  //(add number or +) otherwise treated as string
//         b = Number(prompt('b?', 0 )) //(add number or +) otherwise treated as string
//     }
// }
// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())

//Date and time
//=======================================

// let str = new Date(2025, 3, 18);
// str.setMonth(str.getMonth()+2)
// console.log(str)
// let date1=new Date(0);
// console.log(date1)

//Json method
//=======================================================

// let user = {
//     name: "shree",
//     age: 35,

//     toString() {
//         alert(`${this.name} ${this.age}`)
//     }
// }
// let json = JSON.parse(JSON.stringify(user))
// console.log(json)
// // let geeks=JSON.parse(json)
// // console.log(geeks)

// let meetUp = {
//     title: "conference",
//     room: {
//         number: 123,
//         participants: [{name:'anna'}, {name:'chonn'}, {name:'manna'}]
//     }
// }
// let str = JSON.stringify(meetUp,'participants')
// console.log(str)

//Recursion:-recursion is function which is called inside function repetedly untill it reaches base condition,without base condition function run infinity times.
//=================================================================================================================================================================

// function pow(x, n) {
//     if (n == 1) return x
//     else {
//         return (x * pow(x, n - 1))
//     }
// }
// console.log(pow(5, 6))
//     (n == 1) ? x : x * pow(x, n - 1);


// function juzza(n) {
//     if (n == 0)
//         return 'call at once before function call';
//     else {
//         juzza(n - 1)
//          console.log('called after function called')
//     }
// }
// juzza(5)

//factorial using loop
//===================================================
// function facto(num){
//     fact=1;
//     for(let i=num;num>0;num--){
//         alert(fact*=num)
//     }
// }
// facto(5)

//factorial using loop
//===================================================
// function sup(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++)
//           res*=i
//            return  res;
// }
// console.log(sup(10))



//Lexical environment:It explains how clouser works.Clouser is a function inside anthoer function,a variable declaired inside outer function can be accesed from inner function this is known as clouser.
//=====================================================

// let phrase='mozilla';  //this is outer lexical environment or global lexical environment

// function get(name){
// alert(`${phrase} ${name}`) // this is inner or local lexical environment,it has reference to the outer
// }
// get('firefox')



// let name="shreedhar" // global lexical environment

// function makeover() {
//     let name = "pete";  // outer lexical environment

//     return function () {
//         console.log(`hi ${name}`)  // inner lexical enviroment
//     }
// }
// let over=makeover();
// over()

// function makeover() {
//     let name = "pete";
//     function set() {
//         console.log(`hi ${name}`)
//     }
//     set()
// }
// makeover()


// let x = 3;
// function tet() {
//     console.log(x)
// }
// tet()


//returning function
//========================================================================

// function geek(){
//     let counter=0;
//     return function(){
//       return  counter++;
//     }
// }
// let seek= geek()
// alert(seek())
// alert(seek())
// alert(seek())
//==================================================================================

// function seek() {
//     function meek() {
//         return meek.count++
//     }
//     meek.count = 0;
//     return meek
// }
// let geek = seek()
// alert(geek())
// alert(geek())

//=================================================

// function sayHi() {
//     alert("hello")
//     return sayHi.count++;
// }
// sayHi.count = 0
// alert(sayHi())

//Property flag and descripter
//===============================
// property Flags are
// writable:-if true the value can be changed.
// enumerable:-if true then listed in loop.
// configurable:-if true property can be changed.


// to get the flags
// descriptor=Object.getOwnPropertyDescriptor(Object,property name)

// user={
//     name:"shreedhar"
// }
// let descriptor=Object.getOwnPropertyDescriptor(user,'name')
// console.log(descriptor)



// let user={
//     name:"shreedhar",
//     surname:"shiragumpi",

//    get fullName(){
//      return(`${this.name} ${this.surname}`)
//     },

//     set fullName(value){
// [this.name,this.surname]=value.split(" ")

//     }
// }
// user.fullName= "royal enfield"

// console.log(user.fullName);

//Error handling
//==============================================

// let user = { "age": 38 }

// try {
//     users = JSON.parse(user)
//     console.log(user.name)

// } catch (err) {
//     console.log(err.err)
//     console.log(err.name)
//     console.log(err.stack)
//     console.log("lalal is not defined")
//     // console.log(err.name)
// }


// try {
//     lalall;
// } catch (err) {
//     console.log(err.err)
//     console.log(err.name)
// }

// let meser = {
//     "jhon": "bold"
// }

// try {
//     user = JSON.parse(meser)
//     console.log(user.name)
// } catch (err) {
//     if (err instanceof SyntaxError) {
//         console.log('foundError')
//     } else {
//         console.log('error not found');
//     }
//     console.log(err.err)
//     console.log(err.name)
//     console.log('no error')
// }finally{
//     console.log('this always executes')
// }

//Validation Error
//=======================================

// class Error{
//     constructor(name){
//         this.name=name;
//     }
// }
// class ValidationError extends Error{
//     constructor(name){
//         super(name)
//     }
// }

// function test(){
//     throw new ValidationError("whoops")
// }
// try{
//     test()
// }catch(err){
//     console.log(err.message)
//     console.log(err.name)
// }

//promise:-promise is java script object which link producing code and cunsuming code,when function is passed to the new promise is known as executor,executor has two arguments resolve and reject these argument provided by java script itself
//=================================================================================================
// let promise = new Promise(function (resolve, reject) {
//     let number = 3;
//     if (number % 2 === 0) {
//         resolve('the number is even')
//     } else {
//         reject('the number is odd')
//     }
// })
// promise.then(result => console.log(result))
//     .catch(error => console.log(error))

//=======================================================================================================

// let p = new Promise((resolve, reject) => {
//     let validatecard = true;

//     if (!validatecard) {
//         setTimeout(()=>{
//             resolve('card is not valid')
//         },5000)

//     } else{
//         setTimeout(()=>{
//             reject('123456')
//         },5000)

//     }
// })
// p.then(result => console.log(result))
//     .catch(error => console.log(error))

//Promise.all:-when many promises to  execute parllely,it takes array of promise as an input(itreble)and return new promise and array of their result.If any promise is rejected reject with that error and forgetting the other one in the list.Theirv result are ignored.
//Any promise rejects it rejects whole.
//===============================================================================================

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i ashreedhar')
//     }, 3000)
// })
// p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('i am kiran')
//     }, 1000)
// })

// p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am laxman')
//     }, 5000)
// })
// Promise.all([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))


// let url = [
//     'http://api.github.com/user/ilikhan',
//     'http://api.github.com/user/remy',
//     'http://api.github.com/user/jhon',
//     'http://api.github.com/user/shree',
// ]

// let request = url.map(urs => fetch(urs))

// Promise.all(request)
//     .then(res => res.forEach((ur) => {
//        alert(ur.url)
//     }))




//     Promise.all([
//         new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve('i am human kind ')
//             },3000)
//         }),
//         new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve('i am man kind ')
//             },1000)
//         }),
//         new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 reject('i am woman kind ')
//             },2000)
//         })
//     ])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

//Promise.allSettled:-It wait for the all promises to settle regardless of the result
//=======================================================================================

// Promise.allSettled([
//             new Promise((resolve, reject) => {
//                 setTimeout(()=>{
//                     resolve('i am human kind ')
//                 },3000)
//             }),
//             new Promise((resolve, reject) => {
//                 setTimeout(()=>{
//                     resolve('i am man kind ')
//                 },1000)
//             }),
//             new Promise((resolve, reject) => {
//                 setTimeout(()=>{
//                     reject('i am woman kind ')
//                 },2000)
//             })
//         ])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))



// let urls = [
//     'http://api.github.com/user/ilikhan',
//     'http://api.github.com/user/remy',
//     'http://no such url'
// ]


// let request = urls.map((url) => fetch(url))

// Promise.allSettled(request)
//     .then((res) => res.forEach((text, num) => {
//         if (text.status === "fulfilled") {

//             alert(`${urls[num]} ${text.value.status}`)
//         } if (text.status === "rejected") {
//             alert(`${urls[num]}:${text.reson}`)
//         }

//     }))


//Async await:-async is key word which is used with a function,it always return promise.await is used inside async function.
//await:-This is used inside async function, it is always used before promise.it makes javascript wait until promise settle and returns its result.
// In async function it makes javascript program to wait(line no.788 waits) until promise to be resolved
//============================================================================================================================
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am shreedhar")
//     }, 10000)
// })

// async function setDat() {
//     console.log("i am laxman")
//     let val = await p1;
//     console.log(val)
//     console.log("i am kiran")
// }
// setDat()

//Norml function:-javascript won't wait for promise to be resolved instead it moves to the next line(line no.809)
//===============================================================================================================
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("i am shreedhar")
//     },10000)
// })


// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("i am kiran")
//     },10000)
// })

//  function getData(){
//     p1.then(res=>console.log(res))
//   console.log('namasthe')
// }
// getData()

//Error handling in async await
//======================================
// let API_URL = 'http://not found such url'

// async function mets() {
//     let API_URL = 'http://not found such url'
//     try {
//         let data = await fetch(API_URL)
//         let set = await data.json()
//         console.log(set)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// mets()

//Error handling in async await
//======================================

// async function mets() {
//     let API_URL = 'http://not found such url'

//         let data = await fetch(API_URL)
//         let set = await data.json()
//         console.log(set)
// }
// mets().catch(err=>console.log(err))

//Anthoer method of error handling
//======================================

// async function geek() {
//     let api_url='http://not founr url'
//    let set=await fetch(api_url)
//    let det=await set.json()
//    console.log(det)
// }
// geek().catch(err=>console.log(err))


//Attributes and property in js
//===============================
//Attribute: which writes in html element,which is not case sensitive
//property:which is in dom objects which is case-sensitive.changing attribute can change property but changing property does't effect on attribute





//Generator:-generator are the function having astric symbol at the function key,it return multiple value one after the other,it greate work with iterables.
// it return object with done:true then execution stops there is no yield statment otherwise false
//============================================================================================================================================================

//syntaxog generator.the key word yield* is used to embed one generator in to anthoer
//===================================================================================.

// generator are greate work with iterable
//=========================================

// function* seek(start, end, stepSize = 2) {
//     for (let i = start; i <= end; i += stepSize)
//        yield i;
// }
// let gen = seek(2, 10)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())     //result of next() is always object with two properties value:... and done:true/false


// function* get() {
//     yield 'i am inner in the function'
// }
// function* set() {
//     yield* get()     //yeild* is used embed other generator in current generator function.
//     yield 'i am kiran'
//     yield 'i am laxman'
// }
// let gen=set()
// for(let val of gen)
// console.log(val)

//[symbol.iterator] this method make object iterable
//=====================================================

// let user = {
//     from: 0,
//     to: 5,
//     [Symbol.iterator]() {
//         //it return itarator objects
//         return {
//             current: this.from,
//             last: this.to,
//     next() {
//         //it generate values for iteration
//         //it return result as an object ex:{value:...:done:true/false}
//         if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//         } else {
//            return { done: true };
//         }
//     }
//     }
// }}
// for(let val of user){
//     console.log(val)
// }


//Async iterables:asynchronous iteration is neede when value comes asynchronoussly:after setTimeout or anthoer kind of delay
// i) we use instead of symbol.iteratot we use symbol.asyncIterator.
// ii) The next() method should return a promise.
// iii) we can make simple async next().
// iv) we should use for await(let val of values)

// let user = {
//     from: 1,
//     to: 5,
//     [Symbol.asyncIterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             async next() {
//                 await new Promise(resolve => setTimeout(() => resolve, 1000))
//                 if (this.current <= this.last) {
//                     return { done: false ,value: this.current++, }
//                 } else {
//                     return { done: true }
//                 }
//             }
//         }
//     }
// }
// (async ()=>{
//     for await (let val of user) {
//     console.log(val)
// }})()

//Proxy:
//=============

// proxy1=new Proxy(target,handle)
// taget:orginal Object.
// handle:which operation will be intercepted.
// get():-(target,prop).
// set():-(target,prop,value)

// let user={
//     name:"shreedhar",
//     last:"shiragumpi",
//     age:35
// }
// let proxy1=new Proxy(user,{
//     get(target,prop){
//         if(prop in target){
//             return target[prop]
//         }else{
//             return false
//         }
//     }
// })
// console.log(proxy1.firstname)

// let number=[]

// let proxy1=new Proxy(number,{
//     set(target,prop,val){
//         if(typeof val=='number'){
//             return target[prop]=val
//         }else{false}
//     }
// })

// console.log(number.push(1))
// console.log(number.push('shreedhar'))

//Event bubbling:-event propagation happens from inside to outside in the dom tree and event capturing:-event capturing happens from outside to inside.By default event propagation is bubbling
//=============================================================================================================================================================================

// const div1 = document.querySelector('.div1')
// const div2 = document.querySelector('.div2')
// const div3 = document.querySelector('.div3')
// const div4 = document.querySelector('.div4')


// div1.addEventListener('click', function () {
//     console.log('div1 is clicked')
// }, true)

// div2.addEventListener('click', function () {
//     console.log('div2 is clicked')
// }, true)

// div3.addEventListener('click', function (e) {
//     console.log('div3 is clicked')
//     e.stopPropagation()
// }, true)

// div4.addEventListener('click', function () {
//     console.log('div4 is clicked')
// }, true)

//Event delegation:if we have lot of elements handled in similar way.then instead of assigning handler to each of them,we put single handler on their common ancestor
//====================================================================================================================================================================

// let delEl=document.querySelector('#del');

// delEl.addEventListener('click',function(e){
// console.log(e.target.tagName)
// })

let formEl = document.querySelector("#form");

// formEl.addEventListener("keyup",function(e){
// if(e.target.dataset.uppercase!==undefined){
//     e.target.value=e.target.value.toUpperCase()
// }
// })

// formEl.addEventListener('click',function(e){
// if(e.target.dataset.counter!==undefined){
//     e.target.value++
// }
// })

// let btnEl=document.querySelector("#btn")
// let inpEl=document.querySelector("#inp")
// let ulrEl=document.querySelector("#ulr")

// btnEl.addEventListener("click",function(){
//     let new_el=document.createElement('li')
//     new_el.innerHTML=inpEl.value
//     ulrEl.appendChild(new_el)
//     inpEl.value=""
// })

//onFocus:-an element receive a focus when user click on it,means prepare to access a data and onBlur:-the moment of loosing the focus is  blur.blur is opposite to focus.
//classList:is property of html element it hold class name of current html element of selected element.classLIst returns array
//className returns string
//========================================================================================================================================================================
// const input = document.querySelector("#inpu")
// const err = document.querySelector("#error")

// function demo() {
//     if (!input.value.includes('@')) {
//         input.classList.add('invalid');
//         err.innerHTML = 'please enter valid address'
//     }
// };

// function test(){
//     if(input.value.contains('invalid')){
//         input.classList.remove('invalid')
//         err.innerHTML=""
//     }
// }

// const url = document.querySelector("#url")

// function demo() {
//     if (!url.value.includes('@')) {
//         url.classList.add('invalid')
//     } else {
//         url.classList.remove('invalid')
//     }
// }

//HOW TO MAKE AJAX CALL USING  XMLHTTPREQUEST
//============================================

// let div1El = document.querySelector('#div1')
// let btnEl = document.querySelector("#btn")

// btnEl.addEventListener('click', display)

// function display() {
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://dummyjson.com/products', true);
//     xhr.responseType = 'json';
//     xhr.send();
//     xhr.onprogress = function () {
//         div1El.innerHTML = "Loading..."
//     }
//     xhr.onload = function () {
//         let product = xhr.response;
//         console.log(product)

//         //        product1=JSON.stringify(product)
//         //        console.log(product1)

//         // product2=JSON.parse(product1)
//         // console.log(product2)

//         let { products } = product
//         console.log(products)
//         products.forEach((elem, index) => {
//             let div1El = document.querySelector('#div1')
//             let tr = document.createElement('tr');
//             let tableEl = document.querySelector("#table1");
//             html = `<table border="2px solid grey">
//             <tr>
//             <td></td>
//             <td>id</td>
//             <td>title</td>
//              <td>description</td></tr>
//             <tr><td>${index + 1}</td>
//             <td>${elem.id}</td>
//             <td>${elem.title}</td>
//              <td>${elem.description}</td></tr></table`;

             
//              div1El.insertAdjacentHTML("beforeend",html)
//         })



//     }

// }
