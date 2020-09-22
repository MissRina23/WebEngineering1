/* 1. IIEF: Immediately Invoked Function Expression
use with 'use strict' */

(function(x){'use strict'


    function myFunc(x) {
        return x;

    }

    myFunc();

    var f = function (x) {
        return x;
    }

    f();



    /* 2. Write a function-value that takes two arguments and returns the smaller one. Test numbers, strings and booleans. */

    function funcArgs(x, y) {
        console.log(x, y);
        x= x<y;
        return (x); //prüfen welches ist das Kleinere
    }


    console.log(Math.min(23, 3));
    console.log(Math.min(12, 32));
    console.log(Math.min('one', 2));
    console.log(Math.min());






    /* 3. Write a recursive function-value which tests for even numbers.
    Do not use the modulo-operator. Instead assume the following: 0 is odd, 1 is even, any other number-2 will become odd or even.
    Test on negative numbers. Return true for even and false for odd. */

    function isEven(n) {
        if(n==0)
            return true;
        else if (n == 1)
            return false;
        else if (n < 0)
            return isEven (-n);
        else
            return isEven(n - 2);
    }

    console.log(isEven(12));

    /* 4. Write a function which takes two arguments: the first is a string, the second a letter.
    Test how many times the letter occurs within the string. Return the number. */

    function char_count(str, letter){
        var  letterCount = 0;
        for (var position = 0; position < str.length; position++){
            if (str.charAt(position)== letter){
                letterCount += 1;
            }
        }
        return letterCount;
    }
    console.log(char_count('Katharina', 'a'))


}());