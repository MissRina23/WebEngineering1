'use strict';

var x, message, test;

/* 1. Produce output like this in console */
//message = 'this is a string *';

/*console.log('*'); //als Schleife
console.log('**');
console.log('***');
console.log('****');
console.log('*****');*/

for (var i = 5; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= 5; j++) {
        str += "*";
    }
    console.log(str);
}

/* 2. Take the output character from the user */
var user= prompt('Please enter your name')
console.log(user);



/* 3. Also get the number of outputs from the user */
console.log( 'Ihr Name ist ' + user.length + ' Zeichen lang');


/* 4. NanN is of type number */
if (isNaN(x))
    console.log('I am not a number');
else
    console.log('I am a number!');


/* 5. Check for negative numbers, empty strings, booleans and undefined */

//negative number
console.log('3' - 10);

//empty string
console.log('');

//booleans
test=true;
console.log(typeof test);
x=7;
console.log(test<=x);

//undefined
console.log(test * '');
if (1)
    console.log('I am true!');
console.log(null == undefined);
console.log(null === undefined);
//but
console.log(null == 0);
console.log(undefined == 0);