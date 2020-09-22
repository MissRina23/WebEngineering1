(function(){'use strict';


/* 01. Write a function that takes two arguments, a number to start and a number to end a range.
The function returns an array of the range including start and end. */

function numberRange(start, end) {
    return new Array(end-start+1).fill().map((d, i)=> i + start);
}



/* 02. Test the arguments: If they are not numbers return a meaningful message and an array of ALL the arguments. */



/* 03. Test for too many numbers */



/* 04. Write a function that sums up the number-arguments. Use the range-function to take the range as an argument. */

function sumRange(Array){
    return Array.reduce((x, y)=>x+y,0);
}

/* 05. Expand the range-function to take the increment as an argument. Then adjust the sum-function. */



/* 06. Take some precaution in case start is less than end. */

    console.log(numberRange(1, 10));
    console.log(sumRange(numberRange(1, 10)));

})();