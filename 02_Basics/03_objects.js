// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Amitesh",
    "full name": "Amitesh Pandey",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "amitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "amitesh@chatgpt.com"
// Object.freeze(JsUser)  // freeze the object that not allowed to changed
JsUser.email = "amitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());