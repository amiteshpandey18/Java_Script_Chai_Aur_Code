// Immediately Invoked Function Expressions (IIFE)


(function chai(name){
    // named IIFE
    console.log(`DB CONNECTED ${name}`);
})('Amit');

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
                                         
( (name) => {
    console.log(`DB CONNECTED TWO`);   // Invoked function directly
} )('Amit')

( () => {
    console.log(`DB CONNECTED TWO`);
} )()
