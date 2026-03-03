                  
//  *
//  **
//  ***
//  ****
//  ***** 
                

for (let i = 0; i < 6; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += "*";
    }
   // console.log(pattern);
}


// ******
// *****
// ****
// ***
// **
// * 
           

for (let i = 1; i < 6; i++) {
    let pattern = "";
    for (let j = 6; j > i; j--) {
        pattern += "*";
    }
    console.log(pattern);
}