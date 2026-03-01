const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach(function (button) {
    console.log(button);
    addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

                        // Using switch case

        /**    switch(e.target.id) {
               case 'grey': {
                  b.style.backgroundColor = e.target.id;
                  break;
               }
               case 'white': {
                  b.style.backgroundColor = e.target.id;
                  break;
               }
               case 'blue': {
                  b.style.backgroundColor = e.target.id;
                  break;
               }
               case 'yellow': {
                  b.style.backgroundColor = e.target.id;
                  break;
               }
           }    
   */

                   // Using if 

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }

    })
});